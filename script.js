const movies = [
  {
    year: 1938,
    title: "You Can't Take It with You",
    character: "Tony Kirby",
    director: "Frank Capra",
    genre: "Romantic Comedy",
    rating: 4.5,
    description:
      "The good-hearted son of a wealthy, serious banking family. Tony dislikes the rigid life planned for him and wants to marry Alice Sycamore, whose eccentric family teaches him that happiness and love matter more than money or status."
  },
  {
    year: 1939,
    title: "Made for Each Other",
    character: "John Mason",
    director: "John Cromwell",
    genre: "Romantic Drama",
    rating: 3.5,
    description:
      "A hardworking young lawyer who quickly marries Jane and then struggles with money, family pressure, and their dangerously ill baby. He is loving but overwhelmed, and much of the film is about him trying to hold his family together."
  },
  {
    year: 1939,
    title: "Mr. Smith Goes to Washington",
    character: "Jefferson “Jeff” Smith",
    director: "Frank Capra",
    genre: "Political Drama",
    rating: 5,
    description:
      "An idealistic, inexperienced youth leader unexpectedly appointed to the United States Senate. He initially seems naïve, but his honesty and endurance make him brave enough to confront political corruption almost entirely by himself."
  },
  {
    year: 1940,
    title: "The Philadelphia Story",
    character: "Macaulay “Mike” Connor",
    director: "George Cukor",
    genre: "Romantic Comedy",
    rating: 4.5,
    description:
      "A sharp, sarcastic writer reluctantly working as a society reporter. Mike initially looks down on wealthy people but gradually recognizes Tracy’s vulnerability and briefly falls for her, while retaining more common sense than most of the party guests."
  },
  {
    year: 1940,
    title: "The Shop Around the Corner",
    character: "Alfred Kralik",
    director: "Ernst Lubitsch",
    genre: "Romantic Comedy",
    rating: 5,
    description:
      "The intelligent and dependable senior clerk at a Budapest shop. He constantly argues with Klara without realizing she is the anonymous pen pal he has fallen in love with. Beneath his pride, Alfred is sensitive, romantic, and deeply afraid of rejection."
  },
  {
    year: 1941,
    title: "Pot o’ Gold",
    character: "James Hamilton “Jimmy” Haskell",
    director: "George Marshall",
    genre: "Musical Comedy",
    rating: 3,
    description:
      "A friendly, music-loving man caught between his wealthy, anti-music uncle and a family of musicians. Jimmy is an easygoing romantic lead who becomes involved in radio contests, misunderstandings, and musical comedy."
  },
  {
    year: 1946,
    title: "It’s a Wonderful Life",
    character: "George Bailey",
    director: "Frank Capra",
    genre: "Fantasy Drama",
    rating: 5,
    description:
      "A generous, ambitious man who repeatedly sacrifices his dreams to help his family and Bedford Falls. Years of disappointment convince him that his life has been worthless, until Clarence shows him how profoundly he has affected everyone around him."
  },
  {
    year: 1948,
    title: "Rope",
    character: "Rupert Cadell",
    director: "Alfred Hitchcock",
    genre: "Psychological Crime Thriller",
    rating: 4.5,
    description:
      "A clever, observant former teacher whose intellectual ideas about superior people helped influence two former students. Rupert gradually suspects they have committed murder and is horrified when he realizes they treated his philosophical arguments as permission to kill."
  },
  {
    year: 1948,
    title: "Call Northside 777",
    character: "P. James McNeal",
    director: "Henry Hathaway",
    genre: "Film Noir / Crime Drama",
    rating: 4,
    description:
      "A skeptical Chicago newspaper reporter assigned to investigate claims that a convicted murderer is innocent. He begins the case believing it is merely a human-interest story but becomes determined to uncover the truth once the evidence starts challenging the official version."
  },
  {
    year: 1950,
    title: "Harvey",
    character: "Elwood P. Dowd",
    director: "Henry Koster",
    genre: "Fantasy Comedy",
    rating: 5,
    description:
      "An unfailingly polite, gentle man whose closest friend is Harvey, an invisible six-foot rabbit. Everyone assumes Elwood is mentally ill, but his kindness makes the supposedly normal characters look far more troubled—and the film ultimately indicates that Harvey is real."
  },
  {
    year: 1950,
    title: "The Jackpot",
    character: "Bill Lawrence",
    director: "Walter Lang",
    genre: "Comedy",
    rating: 3,
    description:
      "An ordinary family man who wins an enormous collection of prizes on a radio program. What seems like incredible luck becomes a headache because of taxes, storage problems, and strain on his job and marriage."
  },
  {
    year: 1950,
    title: "Winchester ’73",
    character: "Lin McAdam",
    director: "Anthony Mann",
    genre: "Western",
    rating: 4.5,
    description:
      "A highly skilled marksman relentlessly pursuing the outlaw Dutch Henry Brown. Lin initially appears like a traditional heroic cowboy, but his anger and personal connection to Dutch reveal a much darker, revenge-driven side."
  },
  {
    year: 1951,
    title: "No Highway in the Sky",
    character: "Theodore Honey",
    director: "Henry Koster",
    genre: "Aviation Drama",
    rating: 4,
    description:
      "A brilliant but absent-minded aeronautical engineer who predicts that a particular aircraft model will suffer catastrophic metal fatigue. Socially awkward yet completely sincere, Honey risks his career—and even sabotages an aircraft—to prevent people from being killed."
  },
  {
    year: 1952,
    title: "The Greatest Show on Earth",
    character: "Buttons",
    director: "Cecil B. DeMille",
    genre: "Circus Drama",
    rating: 2,
    description:
      "A compassionate circus clown who never removes his makeup because he is really a fugitive doctor. He ended the suffering of his terminally ill wife and now hides from the law, but exposes his medical knowledge to save injured people after the train disaster."
  },
  {
    year: 1952,
    title: "Bend of the River",
    character: "Glyn McLyntock",
    director: "Anthony Mann",
    genre: "Western",
    rating: 4,
    description:
      "A former Missouri border raider attempting to build a respectable life as a wagon-train guide. Because he understands how difficult it is to escape a violent past, he trusts Emerson Cole—only to discover that not everyone truly wants redemption."
  },
  {
    year: 1953,
    title: "The Naked Spur",
    character: "Howard Kemp",
    director: "Anthony Mann",
    genre: "Psychological Western",
    rating: 4.5,
    description:
      "A bitter Civil War veteran hunting an outlaw for reward money so he can recover the ranch stolen from him. Howard presents himself as a lawman but is emotionally wounded, suspicious, and increasingly consumed by greed before eventually recovering his humanity."
  },
  {
    year: 1954,
    title: "Rear Window",
    character: "L. B. “Jeff” Jefferies",
    director: "Alfred Hitchcock",
    genre: "Mystery Thriller",
    rating: 5,
    description:
      "An adventurous professional photographer confined to his apartment with a broken leg. Restless and resistant to marriage, Jeff watches his neighbors through the rear window and becomes convinced that one of them has murdered his wife."
  },
  {
    year: 1954,
    title: "The Far Country",
    character: "Jeff Webster",
    director: "Anthony Mann",
    genre: "Western",
    rating: 4,
    description:
      "A fiercely independent cattleman who believes that looking after himself is all that matters. He initially refuses responsibility for the people around him, but violence and betrayal eventually force him to choose between isolation and helping the community."
  },
  {
    year: 1955,
    title: "The Man from Laramie",
    character: "Will Lockhart",
    director: "Anthony Mann",
    genre: "Western",
    rating: 5,
    description:
      "A former Army officer secretly investigating the sale of repeating rifles to the Apache attackers who killed his brother. Controlled and principled on the surface, Will is driven by grief and revenge but remains more morally disciplined than the violent men surrounding him."
  },
  {
    year: 1956,
    title: "The Man Who Knew Too Much",
    character: "Dr. Benjamin “Ben” McKenna",
    director: "Alfred Hitchcock",
    genre: "Spy Thriller",
    rating: 4.5,
    description:
      "An American doctor vacationing with his wife and son who accidentally learns about an assassination plot. After his son is kidnapped to ensure his silence, Ben becomes frightened, stubborn, and increasingly determined to rescue him without trusting the authorities."
  },
  {
    year: 1957,
    title: "The Spirit of St. Louis",
    character: "Charles “Slim” Lindbergh",
    director: "Billy Wilder",
    genre: "Biographical Drama",
    rating: 4,
    description:
      "The real-life aviator attempting the first solo nonstop flight from New York to Paris. Much of Jimmy’s performance shows Lindbergh alone in the cockpit, fighting exhaustion, remembering how he reached that moment, and methodically solving problems in the air."
  },
  {
    year: 1957,
    title: "Night Passage",
    character: "Grant McLaine",
    director: "James Neilson",
    genre: "Western",
    rating: 3.5,
    description:
      "A former railroad employee and talented accordion player who was dismissed after allowing a suspected outlaw to escape. Grant receives a chance to redeem himself by protecting a payroll shipment, while confronting the fact that the outlaw leader is his younger brother."
  },
  {
    year: 1958,
    title: "Vertigo",
    character: "John “Scottie” Ferguson",
    director: "Alfred Hitchcock",
    genre: "Psychological Mystery Thriller",
    rating: 5,
    description:
      "A former police detective whose acrophobia and guilt force him into retirement. After becoming obsessed with Madeleine, Scottie’s grief turns into an unhealthy need to recreate her through Judy, making him one of Jimmy’s darkest and most psychologically damaged characters."
  },
  {
    year: 1958,
    title: "Bell, Book and Candle",
    character: "Shepherd “Shep” Henderson",
    director: "Richard Quine",
    genre: "Romantic Fantasy Comedy",
    rating: 4,
    description:
      "A conventional New York publisher who is magically enchanted by the witch Gillian Holroyd. He falls intensely in love without knowing that his emotions were initially caused by a spell, and he becomes understandably furious when he discovers the manipulation."
  },
  {
    year: 1959,
    title: "Anatomy of a Murder",
    character: "Paul “Polly” Biegler",
    director: "Otto Preminger",
    genre: "Courtroom Drama",
    rating: 3.5,
    description:
      "A relaxed-seeming small-town lawyer and former district attorney who loves fishing and jazz. Beneath that casual exterior, he is a shrewd courtroom strategist willing to shape testimony and exploit legal uncertainty while defending a soldier accused of murder."
  },
  {
    year: 1962,
    title: "The Man Who Shot Liberty Valance",
    character: "Ransom “Ranse” Stoddard",
    director: "John Ford",
    genre: "Western",
    rating: 5,
    description:
      "An idealistic young lawyer who believes education and law—not gun violence—can civilize the West. After being credited with killing Liberty Valance, he builds a celebrated political career upon a heroic story he knows is untrue, leaving him permanently indebted to Tom Doniphon."
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

/*
  Adds the styles needed for real half-filled stars and
  expandable character descriptions.
*/
const extraStyles = document.createElement("style");

extraStyles.textContent = `
  .star-rating {
    display: inline-flex;
    gap: 2px;
    white-space: nowrap;
    font-family: Arial, sans-serif;
    font-size: 1.05rem;
    line-height: 1;
  }

  .rating-star {
    position: relative;
    display: inline-block;
    color: rgba(255, 255, 255, 0.25);
  }

  .rating-star.full {
    color: #f2c45e;
  }

  .rating-star.half {
    color: rgba(255, 255, 255, 0.25);
  }

  .rating-star.half::before {
    content: "★";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    overflow: hidden;
    color: #f2c45e;
  }

  .movie-main-row {
    cursor: pointer;
  }

  .movie-main-row:hover {
    background: rgba(255, 255, 255, 0.055);
  }

  .movie-main-row:focus {
    outline: 2px solid #c89f5a;
    outline-offset: -2px;
  }

  .movie-title-button {
    padding: 0;
    min-height: auto;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: left;
    text-transform: none;
    letter-spacing: normal;
    cursor: pointer;
  }

  .movie-title-button:hover {
    text-decoration: underline;
    text-decoration-color: #c89f5a;
    text-underline-offset: 4px;
  }

  .description-row td {
    padding: 0;
    background: rgba(200, 159, 90, 0.08);
  }

  .description-content {
    padding: 24px 28px;
    border-left: 4px solid #c89f5a;
  }

  .description-content strong {
    display: block;
    margin-bottom: 8px;
    color: #c89f5a;
    font-family: "Oswald", Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.8rem;
  }

  .description-content p {
    max-width: 920px;
    margin: 0;
    color: rgba(255, 255, 255, 0.82);
  }

  .description-warning {
    margin-top: 12px !important;
    color: rgba(255, 255, 255, 0.48) !important;
    font-size: 0.75rem;
  }

  .mobile-description-button {
    width: 100%;
    min-height: 42px;
    margin-top: 18px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    background: rgba(255, 255, 255, 0.06);
    color: white;
    cursor: pointer;
  }

  .mobile-description {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.13);
    color: rgba(255, 255, 255, 0.78);
    font-size: 0.86rem;
  }

  .mobile-description p {
    margin: 0;
  }
`;

document.head.appendChild(extraStyles);

function uniqueValues(key) {
  return [...new Set(movies.map(movie => movie[key]))].sort((a, b) =>
    a.localeCompare(b)
  );
}

function formatRating(rating) {
  let stars = "";

  for (let position = 1; position <= 5; position++) {
    if (rating >= position) {
      stars += '<span class="rating-star full" aria-hidden="true">★</span>';
    } else if (rating >= position - 0.5) {
      stars += '<span class="rating-star half" aria-hidden="true">★</span>';
    } else {
      stars += '<span class="rating-star" aria-hidden="true">★</span>';
    }
  }

  return `
    <span
      class="star-rating"
      aria-label="${rating} out of 5 stars"
      title="${rating} out of 5 stars"
    >
      ${stars}
    </span>
  `;
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
        a.director.localeCompare(b.director) ||
        a.year - b.year
    );
  }

  if (value === "genre-asc") {
    sorted.sort(
      (a, b) =>
        a.genre.localeCompare(b.genre) ||
        a.year - b.year
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

function closeAllDesktopDescriptions(exceptId = null) {
  document.querySelectorAll(".description-row").forEach(row => {
    if (row.id !== exceptId) {
      row.hidden = true;
    }
  });

  document.querySelectorAll(".movie-main-row").forEach(row => {
    const descriptionId = row.getAttribute("aria-controls");

    if (descriptionId !== exceptId) {
      row.setAttribute("aria-expanded", "false");
    }
  });
}

function toggleDesktopDescription(index) {
  const descriptionRow = document.querySelector(
    `#description-row-${index}`
  );

  const mainRow = document.querySelector(
    `[aria-controls="description-row-${index}"]`
  );

  if (!descriptionRow || !mainRow) {
    return;
  }

  const willOpen = descriptionRow.hidden;

  closeAllDesktopDescriptions(
    willOpen ? `description-row-${index}` : null
  );

  descriptionRow.hidden = !willOpen;
  mainRow.setAttribute("aria-expanded", String(willOpen));
}

function toggleMobileDescription(index) {
  const description = document.querySelector(
    `#mobile-description-${index}`
  );

  const button = document.querySelector(
    `[aria-controls="mobile-description-${index}"]`
  );

  if (!description || !button) {
    return;
  }

  const willOpen = description.hidden;

  description.hidden = !willOpen;
  button.setAttribute("aria-expanded", String(willOpen));
  button.textContent = willOpen
    ? "Hide character description"
    : "Read character description";
}

function render() {
  const visibleMovies = getFilteredMovies();

  tableBody.innerHTML = visibleMovies
    .map((movie, index) => `
      <tr
        class="movie-main-row"
        tabindex="0"
        role="button"
        aria-expanded="false"
        aria-controls="description-row-${index}"
        data-description-index="${index}"
        title="Click to read the character description"
      >
        <td>${movie.year}</td>

        <td class="movie-title">
          <button
            class="movie-title-button"
            type="button"
            tabindex="-1"
          >
            <em>${movie.title}</em>
          </button>
        </td>

        <td>${movie.character}</td>
        <td>${movie.director}</td>
        <td>${movie.genre}</td>
        <td>${formatRating(movie.rating)}</td>
      </tr>

      <tr
        class="description-row"
        id="description-row-${index}"
        hidden
      >
        <td colspan="6">
          <div class="description-content">
            <strong>
              ${movie.character} — Character description
            </strong>

            <p>${movie.description}</p>

            <p class="description-warning">
              This character guide contains spoilers.
            </p>
          </div>
        </td>
      </tr>
    `)
    .join("");

  cardGrid.innerHTML = visibleMovies
    .map((movie, index) => `
      <article class="movie-card">
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
          <dd>${formatRating(movie.rating)}</dd>
        </dl>

        <button
          class="mobile-description-button"
          type="button"
          aria-expanded="false"
          aria-controls="mobile-description-${index}"
          data-mobile-description-index="${index}"
        >
          Read character description
        </button>

        <div
          class="mobile-description"
          id="mobile-description-${index}"
          hidden
        >
          <p>${movie.description}</p>
        </div>
      </article>
    `)
    .join("");

  const count = visibleMovies.length;

  resultsLabel.textContent =
    count === movies.length
      ? `Showing all ${count} films`
      : `Showing ${count} of ${movies.length} films`;

  emptyState.hidden = count !== 0;

  addDescriptionListeners();
}

function addDescriptionListeners() {
  document.querySelectorAll(".movie-main-row").forEach(row => {
    row.addEventListener("click", () => {
      const index = row.dataset.descriptionIndex;
      toggleDesktopDescription(index);
    });

    row.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        const index = row.dataset.descriptionIndex;
        toggleDesktopDescription(index);
      }
    });
  });

  document
    .querySelectorAll(".mobile-description-button")
    .forEach(button => {
      button.addEventListener("click", () => {
        const index = button.dataset.mobileDescriptionIndex;
        toggleMobileDescription(index);
      });
    });
}

function resetFilters() {
  searchInput.value = "";
  directorFilter.value = "all";
  genreFilter.value = "all";
  sortSelect.value = "year-asc";

  render();
}

searchInput.addEventListener("input", render);
directorFilter.addEventListener("change", render);
genreFilter.addEventListener("change", render);
sortSelect.addEventListener("change", render);
resetButton.addEventListener("click", resetFilters);

document.querySelector("#film-count").textContent = movies.length;

document.querySelector("#director-count").textContent =
  uniqueValues("director").length;

document.querySelector("#western-count").textContent =
  movies.filter(movie =>
    movie.genre.toLowerCase().includes("western")
  ).length;

populateFilters();
render();
