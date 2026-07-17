const movies = [
  {
    "year": 1938,
    "title": "You Can't Take It with You",
    "character": "Tony Kirby",
    "director": "Frank Capra",
    "genre": "Romantic Comedy"
  },
  {
    "year": 1939,
    "title": "Made for Each Other",
    "character": "John Mason",
    "director": "John Cromwell",
    "genre": "Romantic Drama"
  },
  {
    "year": 1939,
    "title": "Mr. Smith Goes to Washington",
    "character": "Jefferson “Jeff” Smith",
    "director": "Frank Capra",
    "genre": "Political Drama"
  },
  {
    "year": 1940,
    "title": "The Philadelphia Story",
    "character": "Macaulay “Mike” Connor",
    "director": "George Cukor",
    "genre": "Romantic Comedy"
  },
  {
    "year": 1940,
    "title": "The Shop Around the Corner",
    "character": "Alfred Kralik",
    "director": "Ernst Lubitsch",
    "genre": "Romantic Comedy"
  },
  {
    "year": 1941,
    "title": "Pot o’ Gold",
    "character": "James Hamilton “Jimmy” Haskins",
    "director": "George Marshall",
    "genre": "Musical Comedy"
  },
  {
    "year": 1946,
    "title": "It’s a Wonderful Life",
    "character": "George Bailey",
    "director": "Frank Capra",
    "genre": "Fantasy Drama"
  },
  {
    "year": 1948,
    "title": "Rope",
    "character": "Rupert Cadell",
    "director": "Alfred Hitchcock",
    "genre": "Psychological Crime Thriller"
  },
  {
    "year": 1948,
    "title": "Call Northside 777",
    "character": "P. J. McNeal",
    "director": "Henry Hathaway",
    "genre": "Film Noir / Crime Drama"
  },
  {
    "year": 1950,
    "title": "Harvey",
    "character": "Elwood P. Dowd",
    "director": "Henry Koster",
    "genre": "Fantasy Comedy"
  },
  {
    "year": 1950,
    "title": "The Jackpot",
    "character": "Bill Lawrence",
    "director": "Walter Lang",
    "genre": "Comedy"
  },
  {
    "year": 1950,
    "title": "Winchester ’73",
    "character": "Lin McAdam",
    "director": "Anthony Mann",
    "genre": "Western"
  },
  {
    "year": 1951,
    "title": "No Highway in the Sky",
    "character": "Theodore Honey",
    "director": "Henry Koster",
    "genre": "Aviation Drama"
  },
  {
    "year": 1952,
    "title": "The Greatest Show on Earth",
    "character": "Buttons",
    "director": "Cecil B. DeMille",
    "genre": "Circus Drama"
  },
  {
    "year": 1952,
    "title": "Bend of the River",
    "character": "Glyn McLyntock",
    "director": "Anthony Mann",
    "genre": "Western"
  },
  {
    "year": 1953,
    "title": "The Naked Spur",
    "character": "Howard Kemp",
    "director": "Anthony Mann",
    "genre": "Psychological Western"
  },
  {
    "year": 1954,
    "title": "Rear Window",
    "character": "L. B. “Jeff” Jefferies",
    "director": "Alfred Hitchcock",
    "genre": "Mystery Thriller"
  },
  {
    "year": 1954,
    "title": "The Far Country",
    "character": "Jeff Webster",
    "director": "Anthony Mann",
    "genre": "Western"
  },
  {
    "year": 1955,
    "title": "The Man from Laramie",
    "character": "Will Lockhart",
    "director": "Anthony Mann",
    "genre": "Western"
  },
  {
    "year": 1956,
    "title": "The Man Who Knew Too Much",
    "character": "Dr. Benjamin “Ben” McKenna",
    "director": "Alfred Hitchcock",
    "genre": "Spy Thriller"
  },
  {
    "year": 1957,
    "title": "The Spirit of St. Louis",
    "character": "Charles Lindbergh",
    "director": "Billy Wilder",
    "genre": "Biographical Drama"
  },
  {
    "year": 1957,
    "title": "Night Passage",
    "character": "Grant McLaine",
    "director": "James Neilson",
    "genre": "Western"
  },
  {
    "year": 1958,
    "title": "Vertigo",
    "character": "John “Scottie” Ferguson",
    "director": "Alfred Hitchcock",
    "genre": "Psychological Mystery Thriller"
  },
  {
    "year": 1958,
    "title": "Bell, Book and Candle",
    "character": "Shepherd “Shep” Henderson",
    "director": "Richard Quine",
    "genre": "Romantic Fantasy Comedy"
  },
  {
    "year": 1959,
    "title": "Anatomy of a Murder",
    "character": "Paul Biegler",
    "director": "Otto Preminger",
    "genre": "Courtroom Drama"
  },
  {
    "year": 1962,
    "title": "The Man Who Shot Liberty Valance",
    "character": "Ransom “Ranse” Stoddard",
    "director": "John Ford",
    "genre": "Western"
  }
];

const tableBody = document.querySelector("#movie-table");
const cardGrid = document.querySelector("#movie-cards");
const searchInput = document.querySelector("#search");
const directorFilter = document.querySelector("#director-filter");
const genreFilter = document.querySelector("#genre-filter");
const sortSelect = document.querySelector("#sort");
const resetButton = document.querySelector("#reset");
const resultsLabel = document.querySelector("#results-label");
const emptyState = document.querySelector("#empty-state");

function uniqueValues(key) {
  return [...new Set(movies.map(movie => movie[key]))].sort((a, b) => a.localeCompare(b));
}

function populateFilters() {
  uniqueValues("director").forEach(director => {
    directorFilter.add(new Option(director, director));
  });

  uniqueValues("genre").forEach(genre => {
    genreFilter.add(new Option(genre, genre));
  });
}

function sortMovies(items) {
  const sorted = [...items];
  const value = sortSelect.value;

  if (value === "year-asc") sorted.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
  if (value === "year-desc") sorted.sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
  if (value === "title-asc") sorted.sort((a, b) => a.title.localeCompare(b.title));
  if (value === "director-asc") sorted.sort((a, b) => a.director.localeCompare(b.director) || a.year - b.year);
  if (value === "genre-asc") sorted.sort((a, b) => a.genre.localeCompare(b.genre) || a.year - b.year);

  return sorted;
}

function getFilteredMovies() {
  const term = searchInput.value.trim().toLowerCase();

  return sortMovies(movies.filter(movie => {
    const searchable = `${movie.title} ${movie.character} ${movie.director} ${movie.genre} ${movie.year}`.toLowerCase();
    const matchesSearch = searchable.includes(term);
    const matchesDirector = directorFilter.value === "all" || movie.director === directorFilter.value;
    const matchesGenre = genreFilter.value === "all" || movie.genre === genreFilter.value;
    return matchesSearch && matchesDirector && matchesGenre;
  }));
}

function render() {
  const visibleMovies = getFilteredMovies();

  tableBody.innerHTML = visibleMovies.map(movie => `
    <tr>
      <td>${movie.year}</td>
      <td class="movie-title"><em>${movie.title}</em></td>
      <td>${movie.character}</td>
      <td>${movie.director}</td>
      <td>${movie.genre}</td>
      <td><span class="rating-placeholder" title="Add your rating later">☆☆☆☆☆</span></td>
    </tr>
  `).join("");

  cardGrid.innerHTML = visibleMovies.map(movie => `
    <article class="movie-card">
      <div class="movie-card-top">
        <h3>${movie.title}</h3>
        <span class="movie-year">${movie.year}</span>
      </div>
      <dl>
        <dt>Character</dt><dd>${movie.character}</dd>
        <dt>Director</dt><dd>${movie.director}</dd>
        <dt>Genre</dt><dd>${movie.genre}</dd>
        <dt>My rating</dt><dd class="rating-placeholder">☆☆☆☆☆</dd>
      </dl>
    </article>
  `).join("");

  const count = visibleMovies.length;
  resultsLabel.textContent = count === movies.length
    ? `Showing all ${count} films`
    : `Showing ${count} of ${movies.length} films`;

  emptyState.hidden = count !== 0;
}

function resetFilters() {
  searchInput.value = "";
  directorFilter.value = "all";
  genreFilter.value = "all";
  sortSelect.value = "year-asc";
  render();
}

[searchInput, directorFilter, genreFilter, sortSelect].forEach(control => {
  control.addEventListener("input", render);
  control.addEventListener("change", render);
});

resetButton.addEventListener("click", resetFilters);

document.querySelector("#film-count").textContent = movies.length;
document.querySelector("#director-count").textContent = uniqueValues("director").length;
document.querySelector("#western-count").textContent =
  movies.filter(movie => movie.genre.toLowerCase().includes("western")).length;

populateFilters();
render();
