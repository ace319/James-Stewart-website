const movies = [
  {
    year: 1938,
    title: "You Can't Take It with You",
    character: "Tony Kirby",
    director: "Frank Capra",
    genre: "Romantic Comedy",
    rating: 4.5,
    poster: "images/posters/you-cant-take-it-with-you.jpg",
    description:
      "The good-hearted son of a wealthy banking family. Tony dislikes the rigid life planned for him and wants to marry Alice Sycamore, whose eccentric family teaches him that happiness and love matter more than money or status."
  },
  {
    year: 1939,
    title: "Made for Each Other",
    character: "John Mason",
    director: "John Cromwell",
    genre: "Romantic Drama",
    rating: 3.5,
    poster: "images/posters/made-for-each-other.jpg",
    description:
      "A hardworking young lawyer who quickly marries Jane and then struggles with money, family pressure and their dangerously ill baby. He is loving but overwhelmed as he tries to hold his family together."
  },
  {
    year: 1939,
    title: "Mr. Smith Goes to Washington",
    character: "Jefferson “Jeff” Smith",
    director: "Frank Capra",
    genre: "Political Drama",
    rating: 5,
    poster: "images/posters/mr-smith-goes-to-washington.jpg",
    description:
      "An idealistic and inexperienced youth leader unexpectedly appointed to the United States Senate. Although initially naïve, his honesty and endurance give him the courage to confront political corruption."
  },
  {
    year: 1940,
    title: "The Philadelphia Story",
    character: "Macaulay “Mike” Connor",
    director: "George Cukor",
    genre: "Romantic Comedy",
    rating: 4.5,
    poster: "images/posters/the-philadelphia-story.jpg",
    description:
      "A sharp and sarcastic writer reluctantly working as a society reporter. Mike initially looks down on the wealthy people he covers but gradually recognizes Tracy’s vulnerability and briefly falls in love with her."
  },
  {
    year: 1940,
    title: "The Shop Around the Corner",
    character: "Alfred Kralik",
    director: "Ernst Lubitsch",
    genre: "Romantic Comedy",
    rating: 5,
    poster: "images/posters/the-shop-around-the-corner.jpg",
    description:
      "The intelligent and dependable senior clerk at a Budapest shop. He constantly argues with Klara without realizing that she is the anonymous pen pal with whom he has fallen in love."
  },
  {
    year: 1941,
    title: "Pot o’ Gold",
    character: "James Hamilton “Jimmy” Haskell",
    director: "George Marshall",
    genre: "Musical Comedy",
    rating: 3,
    poster: "images/posters/pot-o-gold.jpg",
    description:
      "A friendly, music-loving man caught between his wealthy anti-music uncle and a family of musicians. Jimmy becomes involved in radio contests, misunderstandings and musical comedy."
  },
  {
    year: 1946,
    title: "It’s a Wonderful Life",
    character: "George Bailey",
    director: "Frank Capra",
    genre: "Fantasy Drama",
    rating: 5,
    poster: "images/posters/its-a-wonderful-life.jpg",
    description:
      "A generous and ambitious man who repeatedly sacrifices his dreams to help his family and Bedford Falls. Clarence eventually shows George how profoundly his life has affected everyone around him."
  },
  {
    year: 1948,
    title: "Rope",
    character: "Rupert Cadell",
    director: "Alfred Hitchcock",
    genre: "Psychological Crime Thriller",
    rating: 4.5,
    poster: "images/posters/rope.jpg",
    description:
      "A clever and observant former teacher whose intellectual arguments have influenced two former students. Rupert gradually suspects that they have committed murder and is horrified by what his ideas helped inspire."
  },
  {
    year: 1948,
    title: "Call Northside 777",
    character: "P. James McNeal",
    director: "Henry Hathaway",
    genre: "Film Noir / Crime Drama",
    rating: 4,
    poster: "images/posters/call-northside-777.jpg",
    description:
      "A skeptical Chicago newspaper reporter assigned to investigate claims that a convicted murderer is innocent. What begins as a human-interest story becomes a determined search for the truth."
  },
   {
    year: 1950,
    title: "Winchester ’73",
    character: "Lin McAdam",
    director: "Anthony Mann",
    genre: "Western",
    rating: 4.5,
    poster: "images/posters/winchester-73.jpg",
    description:
      "A skilled marksman relentlessly pursuing Dutch Henry Brown. Lin’s search for a stolen Winchester rifle gradually reveals that his mission is driven by a deeply personal desire for revenge."
  },
  {
  year: 1950,
  title: "Broken Arrow",
  character: "Tom Jeffords",
  director: "Delmer Daves",
  genre: "Western Drama",
  rating: 3.5,
  poster: "images/posters/broken-arrow.jpg",
  description:
    "A former Army scout who becomes determined to create peace between the Apache people and American settlers. Tom develops a deep friendship with Cochise and marries Sonseeahray, but his efforts toward peace come at a devastating personal cost."
},
  {
    year: 1950,
    title: "Harvey",
    character: "Elwood P. Dowd",
    director: "Henry Koster",
    genre: "Fantasy Comedy",
    rating: 5,
    poster: "images/posters/harvey.jpg",
    description:
      "An unfailingly polite and gentle man whose closest friend is Harvey, an invisible six-foot-tall rabbit. Elwood’s kindness makes everyone question whether he is truly the person who needs to be changed."
  },
  {
    year: 1950,
    title: "The Jackpot",
    character: "Bill Lawrence",
    director: "Walter Lang",
    genre: "Comedy",
    rating: 3,
    poster: "images/posters/the-jackpot.jpg",
    description:
      "A small-town family man who wins an enormous collection of prizes from a radio contest. The supposed jackpot creates taxes, confusion and problems that quickly overwhelm his ordinary life."
  },
  {
    year: 1951,
    title: "No Highway in the Sky",
    character: "Theodore Honey",
    director: "Henry Koster",
    genre: "Aviation Drama",
    rating: 4,
    poster: "images/posters/no-highway-in-the-sky.jpg",
    description:
      "An eccentric and socially awkward aviation engineer who believes a new passenger aircraft will suffer catastrophic metal fatigue. Although others dismiss him, Honey risks his career to prevent a disaster."
  },
  {
    year: 1952,
    title: "The Greatest Show on Earth",
    character: "Buttons",
    director: "Cecil B. DeMille",
    genre: "Circus Drama",
    rating: 2,
    poster: "images/posters/the-greatest-show-on-earth.jpg",
    description:
      "A mysterious circus clown who never removes his makeup. Buttons was once a doctor and is hiding from the law after ending the suffering of his terminally ill wife."
  },
  {
    year: 1952,
    title: "Bend of the River",
    character: "Glyn McLyntock",
    director: "Anthony Mann",
    genre: "Western",
    rating: 4,
    poster: "images/posters/bend-of-the-river.jpg",
    description:
      "A former border raider attempting to leave his violent past behind. Glyn guides a wagon train west but must prove that a person with a troubled history can genuinely change."
  },
  {
    year: 1953,
    title: "The Naked Spur",
    character: "Howard Kemp",
    director: "Anthony Mann",
    genre: "Psychological Western",
    rating: 4.5,
    poster: "images/posters/the-naked-spur.jpg",
    description:
      "A bitter Civil War veteran hunting an outlaw for reward money so he can recover his stolen ranch. Howard becomes increasingly consumed by suspicion and greed before recovering his humanity."
  },
  {
    year: 1954,
    title: "Rear Window",
    character: "L. B. “Jeff” Jefferies",
    director: "Alfred Hitchcock",
    genre: "Mystery Thriller",
    rating: 5,
    poster: "images/posters/rear-window.jpg",
    description:
      "An adventurous professional photographer confined to his apartment with a broken leg. Jeff watches his neighbors through the rear window and becomes convinced that one of them has committed murder."
  },
  {
    year: 1954,
    title: "The Far Country",
    character: "Jeff Webster",
    director: "Anthony Mann",
    genre: "Western",
    rating: 4,
    poster: "images/posters/the-far-country.jpg",
    description:
      "A fiercely independent cattleman who believes that looking after himself is all that matters. Violence and betrayal eventually force Jeff to choose between isolation and helping a threatened community."
  },
  {
    year: 1955,
    title: "The Man from Laramie",
    character: "Will Lockhart",
    director: "Anthony Mann",
    genre: "Western",
    rating: 5,
    poster: "images/posters/the-man-from-laramie.jpg",
    description:
      "A former Army officer secretly investigating the sale of repeating rifles to the Apache attackers who killed his brother. Will is controlled and principled but driven by grief and revenge."
  },
  {
    year: 1956,
    title: "The Man Who Knew Too Much",
    character: "Dr. Benjamin “Ben” McKenna",
    director: "Alfred Hitchcock",
    genre: "Spy Thriller",
    rating: 4.5,
    poster: "images/posters/the-man-who-knew-too-much.jpg",
    description:
      "An American doctor vacationing with his wife and son who accidentally learns about an assassination plot. After his son is kidnapped, Ben desperately tries to rescue him without alerting the conspirators."
  },
  {
    year: 1957,
    title: "The Spirit of St. Louis",
    character: "Charles “Slim” Lindbergh",
    director: "Billy Wilder",
    genre: "Biographical Drama",
    rating: 4,
    poster: "images/posters/the-spirit-of-st-louis.jpg",
    description:
      "The determined aviator attempting the first solo nonstop flight from New York to Paris. Much of the character’s struggle is against exhaustion, isolation, dangerous weather and the limitations of his aircraft."
  },
  {
    year: 1957,
    title: "Night Passage",
    character: "Grant McLaine",
    director: "James Neilson",
    genre: "Western",
    rating: 3.5,
    poster: "images/posters/night-passage.jpg",
    description:
      "A former railroad employee hired to transport payroll money through dangerous territory. Grant must confront a gang of outlaws that includes his younger brother."
  },
  {
    year: 1958,
    title: "Vertigo",
    character: "John “Scottie” Ferguson",
    director: "Alfred Hitchcock",
    genre: "Psychological Mystery Thriller",
    rating: 5,
    poster: "images/posters/vertigo.jpg",
    description:
      "A retired San Francisco detective suffering from acrophobia. Scottie becomes dangerously obsessed with a mysterious woman and later attempts to transform another woman into the image of the person he lost."
  },
  {
    year: 1958,
    title: "Bell, Book and Candle",
    character: "Shepherd “Shep” Henderson",
    director: "Richard Quine",
    genre: "Romantic Fantasy Comedy",
    rating: 4,
    poster: "images/posters/bell-book-and-candle.jpg",
    description:
      "A successful publisher who becomes enchanted by his mysterious neighbor Gillian. He does not initially realize that she is a witch who has used magic to make him fall in love with her."
  },
  {
    year: 1959,
    title: "Anatomy of a Murder",
    character: "Paul “Polly” Biegler",
    director: "Otto Preminger",
    genre: "Courtroom Drama",
    rating: 3.5,
    poster: "images/posters/anatomy-of-a-murder.jpg",
    description:
      "A relaxed but highly intelligent small-town lawyer defending an Army lieutenant accused of murder. Paul carefully navigates conflicting testimony, difficult moral questions and courtroom strategy."
  },
  {
    year: 1962,
    title: "The Man Who Shot Liberty Valance",
    character: "Ransom “Ranse” Stoddard",
    director: "John Ford",
    genre: "Western",
    rating: 5,
    poster: "images/posters/the-man-who-shot-liberty-valance.jpg",
    description:
      "An idealistic young lawyer who believes education and law can civilize the West. His political career is built upon a heroic story about Liberty Valance that he knows is not completely true."
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
  return [...new Set(movies.map(movie => movie[key]))].sort((a, b) =>
    a.localeCompare(b)
  );
}

function createMovieId(movie) {
  return `${movie.year}-${movie.title}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function ratingMarkup(rating) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const amount = rating - index;

    let starClass = "empty";

    if (amount >= 1) {
      starClass = "full";
    } else if (amount >= 0.5) {
      starClass = "half";
    }

    return `
      <span class="single-star ${starClass}" aria-hidden="true">★</span>
    `;
  }).join("");

  return `
    <span
      class="rating-stars"
      aria-label="${rating} out of 5 stars"
    >
      ${stars}
    </span>

    <span class="rating-number">${rating}/5</span>
  `;
}

function posterMarkup(movie, extraClass = "") {
  return `
    <div class="movie-poster-frame ${extraClass}">
      <img
        class="movie-poster"
        src="${movie.poster}"
        alt="Movie poster for ${movie.title}"
        loading="lazy"
      >

      <div class="movie-poster-fallback" hidden>
        <span>${movie.year}</span>
        <strong>${movie.title}</strong>
      </div>
    </div>
  `;
}

function populateFilters() {
  directorFilter
    .querySelectorAll("option:not(:first-child)")
    .forEach(option => option.remove());

  genreFilter
    .querySelectorAll("option:not(:first-child)")
    .forEach(option => option.remove());

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

  if (value === "year-asc") {
    sorted.sort(
      (a, b) => a.year - b.year || a.title.localeCompare(b.title)
    );
  }

  if (value === "year-desc") {
    sorted.sort(
      (a, b) => b.year - a.year || a.title.localeCompare(b.title)
    );
  }

  if (value === "title-asc") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (value === "director-asc") {
    sorted.sort(
      (a, b) =>
        a.director.localeCompare(b.director) || a.year - b.year
    );
  }

  if (value === "genre-asc") {
    sorted.sort(
      (a, b) => a.genre.localeCompare(b.genre) || a.year - b.year
    );
  }

  return sorted;
}

function getFilteredMovies() {
  const term = searchInput.value.trim().toLowerCase();

  return sortMovies(
    movies.filter(movie => {
      const searchable = `
        ${movie.title}
        ${movie.character}
        ${movie.director}
        ${movie.genre}
        ${movie.year}
        ${movie.description}
      `.toLowerCase();

      const matchesSearch = searchable.includes(term);

      const matchesDirector =
        directorFilter.value === "all" ||
        movie.director === directorFilter.value;

      const matchesGenre =
        genreFilter.value === "all" ||
        movie.genre === genreFilter.value;

      return matchesSearch && matchesDirector && matchesGenre;
    })
  );
}

function showPosterFallback(image) {
  image.hidden = true;

  const fallback = image.nextElementSibling;

  if (fallback) {
    fallback.hidden = false;
  }
}

function activatePosterFallbacks() {
  document.querySelectorAll(".movie-poster").forEach(image => {
    image.addEventListener(
      "error",
      () => {
        showPosterFallback(image);
      },
      { once: true }
    );

    if (image.complete && image.naturalWidth === 0) {
      showPosterFallback(image);
    }
  });
}

function toggleTableDescription(row) {
  const movieId = row.dataset.movieId;
  const descriptionRow = document.querySelector(
    `#table-description-${movieId}`
  );

  if (!descriptionRow) {
    return;
  }

  const willOpen = descriptionRow.hidden;

  descriptionRow.hidden = !willOpen;
  row.setAttribute("aria-expanded", String(willOpen));
}

function activateTableRows() {
  tableBody.querySelectorAll(".movie-row").forEach(row => {
    row.addEventListener("click", () => {
      toggleTableDescription(row);
    });

    row.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleTableDescription(row);
      }
    });
  });
}

function activateCardButtons() {
  cardGrid.querySelectorAll(".movie-card-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const descriptionId = button.getAttribute("aria-controls");
      const description = document.querySelector(`#${descriptionId}`);

      if (!description) {
        return;
      }

      const willOpen = description.hidden;

      description.hidden = !willOpen;
      button.setAttribute("aria-expanded", String(willOpen));
      button.textContent = willOpen
        ? "Hide character description"
        : "Read character description";
    });
  });
}

function render() {
  const visibleMovies = getFilteredMovies();

  tableBody.innerHTML = visibleMovies
    .map(movie => {
      const movieId = createMovieId(movie);

      return `
        <tr
          class="movie-row"
          data-movie-id="${movieId}"
          tabindex="0"
          aria-expanded="false"
          aria-controls="table-description-${movieId}"
        >
          <td>${movie.year}</td>

          <td class="movie-title">
            <div class="movie-title-with-poster">
              ${posterMarkup(movie, "movie-poster-frame--table")}

              <div>
                <em>${movie.title}</em>
                <small class="description-hint">
                  Select to read about the character
                </small>
              </div>
            </div>
          </td>

          <td>${movie.character}</td>
          <td>${movie.director}</td>
          <td>${movie.genre}</td>

          <td>
            <div class="movie-rating">
              ${ratingMarkup(movie.rating)}
            </div>
          </td>
        </tr>

        <tr
          class="movie-description-row"
          id="table-description-${movieId}"
          hidden
        >
          <td colspan="6">
            <div class="movie-description-panel">
              <strong>${movie.character}</strong>
              <p>${movie.description}</p>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");

  cardGrid.innerHTML = visibleMovies
    .map(movie => {
      const movieId = createMovieId(movie);

      return `
        <article class="movie-card movie-card-with-poster">

          <div class="movie-card-shell">

            ${posterMarkup(movie, "movie-poster-frame--card")}

            <div class="movie-card-body">

              <div class="movie-card-top">
                <h3>${movie.title}</h3>
                <span class="movie-year">${movie.year}</span>
              </div>

              <dl>
                <dt>Character</dt>
                <dd>${movie.character}</dd>

                <dt>Director</dt>
                <dd>${movie.director}</dd>

                <dt>Genre</dt>
                <dd>${movie.genre}</dd>

                <dt>My rating</dt>
                <dd>
                  <div class="movie-rating">
                    ${ratingMarkup(movie.rating)}
                  </div>
                </dd>
              </dl>

              <button
                class="movie-card-toggle"
                type="button"
                aria-expanded="false"
                aria-controls="card-description-${movieId}"
              >
                Read character description
              </button>

            </div>

          </div>

          <div
            class="movie-card-description"
            id="card-description-${movieId}"
            hidden
          >
            <strong>${movie.character}</strong>
            <p>${movie.description}</p>
          </div>

        </article>
      `;
    })
    .join("");

  const count = visibleMovies.length;

  resultsLabel.textContent =
    count === movies.length
      ? `Showing all ${count} films`
      : `Showing ${count} of ${movies.length} films`;

  emptyState.hidden = count !== 0;

  activatePosterFallbacks();
  activateTableRows();
  activateCardButtons();
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

const filmCount = document.querySelector("#film-count");
const directorCount = document.querySelector("#director-count");
const westernCount = document.querySelector("#western-count");

if (filmCount) {
  filmCount.textContent = movies.length;
}

if (directorCount) {
  directorCount.textContent = uniqueValues("director").length;
}

if (westernCount) {
  westernCount.textContent = movies.filter(movie =>
    movie.genre.toLowerCase().includes("western")
  ).length;
}

populateFilters();
render();
