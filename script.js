const movies = [
  {
    year: 1935,
    title: "The Murder Man",
    character: "“Shorty”",
    director: "Tim Whelan",
    genre: "Crime Drama",
    rating: 2.5,
    poster: "images/posters/the-murder-man.jpg",
    description:
      "An eager young newspaper reporter working alongside the more experienced members of the crime desk. Shorty appears only briefly, but the role marked Jimmy Stewart’s credited feature-film debut."
  },
  {
    year: 1936,
    title: "Next Time We Love",
    character: "Christopher Tyler",
    director: "Edward H. Griffith",
    genre: "Romantic Drama",
    rating: 3,
    poster: "images/posters/next-time-we-love.jpg",
    description:
      "An ambitious young newspaper reporter married to aspiring actress Cicely Tyler. As their careers repeatedly separate them, Christopher struggles to balance his professional dreams with his love for his wife and family."
  },
  {
    year: 1936,
    title: "Speed",
    character: "Terry Martin",
    director: "Edwin L. Marin",
    genre: "Action Drama",
    rating: 3,
    poster: "images/posters/speed.jpg",
    description:
      "A confident and witty automobile test driver attempting to perfect a revolutionary new carburetor. Terry risks his safety during increasingly dangerous high-speed tests while also becoming involved in a workplace romance."
  },
  {
    year: 1936,
    title: "The Gorgeous Hussy",
    character: "“Rowdy” Dow",
    director: "Clarence Brown",
    genre: "Historical Romance Drama",
    rating: 1.5,
    poster: "images/posters/the-gorgeous-hussy.jpg",
    description:
      "Peggy O’Neal’s loyal childhood friend, who remains protective of her during the political scandals surrounding her life in Washington. Rowdy helps defend Peggy’s reputation and escorts her during a dangerous journey, but Jimmy Stewart appears in only a small supporting role."
  },
  {
    year: 1936,
    title: "Born to Dance",
    character: "Ted Barker",
    director: "Roy Del Ruth",
    genre: "Musical Comedy",
    rating: 3.5,
    poster: "images/posters/born-to-dance.jpg",
    description:
      "A friendly Navy sailor who falls in love with aspiring dancer Nora Paige while on shore leave. Ted’s connection to a famous Broadway performer creates romantic misunderstandings, giving Jimmy Stewart an unusually musical role filled with singing, comedy and dancing."
  },
  {
    year: 1936,
    title: "After the Thin Man",
    character: "David Graham",
    director: "W. S. Van Dyke",
    genre: "Murder Mystery Comedy",
    rating: 4,
    poster: "images/posters/after-the-thin-man.jpg",
    description:
      "The former fiancé of Selma Landis, whose husband disappears shortly after Nick and Nora Charles return to San Francisco. David initially appears devoted and concerned, but the investigation gradually reveals a much darker and more calculating side to him."
  },
  {
    year: 1937,
    title: "Seventh Heaven",
    character: "Chico",
    director: "Henry King",
    genre: "Romantic Drama",
    rating: 4,
    poster: "images/posters/seventh-heaven.jpg",
    description:
      "A poor Paris sewer worker who dreams of improving his life and reluctantly gives Diane a safe place to stay. Their unusual arrangement develops into love, but World War I separates them and leaves Chico fighting to return home."
  },
  {
  year: 1937,
  title: "Navy Blue and Gold",
  character: "John “Truck” Cross",
  director: "Sam Wood",
  genre: "Sports Drama",
  rating: 3.5,
  poster: "images/posters/navy-blue-and-gold.jpg",
  description:
    "An enlisted sailor determined to become an officer at the United States Naval Academy while trying to clear his father’s disgraced name. Truck becomes involved in academy life and football, but his loyalty to his father gives the story its strongest emotional moments."
},
  {
  year: 1938,
  title: "Of Human Hearts",
  character: "Jason Wilkins",
  director: "Clarence Brown",
  genre: "Drama",
  rating: 3,
  poster: "images/posters/of-human-hearts.jpg",
  description:
    "The ambitious son of a poor minister who leaves home to become a doctor. Jason grows increasingly distant from his family as his career advances, until a meeting with President Abraham Lincoln forces him to confront how badly he has neglected his mother."
},
  {
  year: 1938,
  title: "Vivacious Lady",
  character: "Peter Morgan",
  director: "George Stevens",
  genre: "Romantic Comedy",
  rating: 3.5,
  poster: "images/posters/vivacious-lady.jpg",
  description:
    "A shy young botany professor who impulsively marries nightclub singer Francey Brent after meeting her in New York. Peter brings his new wife home but struggles to tell his strict father about the marriage, leading to a series of misunderstandings and increasingly chaotic attempts to keep their relationship together."
},
  {
    year: 1938,
    title: "You Can't Take It with You",
    character: "Tony Kirby",
    director: "Frank Capra",
    genre: "Romantic Comedy",
    rating: 3.5,
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
    title: "The Shop Around the Corner",
    character: "Alfred Kralik",
    director: "Ernst Lubitsch",
    genre: "Romantic Comedy",
    rating: 4,
    poster: "images/posters/the-shop-around-the-corner.jpg",
    description:
      "The intelligent and dependable senior clerk at a Budapest shop. He constantly argues with Klara without realizing that she is the anonymous pen pal with whom he has fallen in love."
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
    title: "On Our Merry Way",
    character: "Slim",
    director: "Multiple Directors",
    genre: "Comedy Anthology",
    rating: 2.5,
    poster: "images/posters/on-our-merry-way.jpg",
    description:
      "A struggling jazz musician traveling with his friend Lank and an impoverished band. Slim and Lank attempt to rig a local talent contest to earn money for repairs, leading to musical confusion and physical comedy. Jimmy Stewart appears only in one segment of the anthology."
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
    year: 1950,
    title: "Winchester ’73",
    character: "Lin McAdam",
    director: "Anthony Mann",
    genre: "Western",
    rating: 4,
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
    rating: 3.5,
    poster: "images/posters/no-highway-in-the-sky.jpg",
    description:
      "An eccentric and socially awkward aviation engineer who believes a new passenger aircraft will suffer catastrophic metal fatigue. Although others dismiss him, Honey risks his career to prevent a disaster."
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
    year: 1953,
    title: "The Naked Spur",
    character: "Howard Kemp",
    director: "Anthony Mann",
    genre: "Psychological Western",
    rating: 4,
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
    rating: 4.5,
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
    rating: 3,
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

const movieReviews = {
  "The Murder Man":
    "Jimmy is natural and recognizable as Shorty, showing some of the warmth and nervous energy he would later become famous for, but he is barely present and has almost nothing important to do.",

  "Next Time We Love":
    "Jimmy's first substantial leading role shows his sincerity and emotional ability as Christopher, although the character can be frustrating and the melancholy story does not always give him enough to work with.",

  "Speed":
    "Jimmy is unusually confident, sarcastic and witty as Terry Martin, showing a more energetic side of his personality. The movie is fairly basic, but his charm makes it much more enjoyable.",

  "Born to Dance":
    "Jimmy reveals a completely different side as Ted Barker, singing, dancing and handling broad romantic comedy surprisingly well. He looks increasingly comfortable carrying a movie as a leading man.",

  "The Gorgeous Hussy":
    "Jimmy gives Rowdy Dow an easy warmth and loyalty that makes him immediately likable, but he has far too little screen time for the character or performance to make a major impression.",

  "After the Thin Man":
    "One of Jimmy's most fascinating early performances, using his gentle and trustworthy image to disguise what David is really capable of. His transformation during the final reveal is genuinely frightening.",

  "Seventh Heaven":
    "Jimmy gives one of his strongest early leading performances as Chico, beginning rough, proud and emotionally guarded before gradually becoming tender and romantic. His relationship with Diane brings out some very sincere acting.",

  "Navy Blue and Gold":
    "Jimmy gives Truck Cross a lot of warmth and determination, especially when he defends his father and refuses to be ashamed of him. The family story gives him stronger material than the football and academy scenes.",

  "Of Human Hearts":
    "Jimmy makes Jason more interesting by allowing him to become selfish, ambitious and distant without completely losing his humanity. His confrontation with Abraham Lincoln gives him the strongest emotional moment in the movie.",

  "Vivacious Lady":
  "Jimmy is confident, charming and very funny as Peter Morgan, showing how comfortable he had become carrying a romantic comedy by 1938. His drunk scene is a highlight, and his natural chemistry with Ginger Rogers helps elevate a fairly thin story.",
  
  "You Can't Take It with You":
    "Jimmy makes Tony Kirby charming and sincere while showing how trapped he feels by his wealthy family and expected future. He fits naturally into Capra's mixture of romance, comedy and idealism.",

  "Made for Each Other":
    "Jimmy convincingly plays John Mason as an ordinary young husband overwhelmed by work, money and family problems. His frustration and desperation feel genuine, even if the character is less memorable than his greatest roles.",

  "Mr. Smith Goes to Washington":
    "One of Jimmy's defining performances, taking Jefferson Smith from innocent and awkward to furious, exhausted and heroic. The filibuster lets him combine his sincerity, physical acting and emotional intensity perfectly.",

  "The Philadelphia Story":
    "Jimmy is witty, romantic and wonderfully loose as Mike Connor, especially once the character gets drunk. He easily holds his own beside Cary Grant and Katharine Hepburn and gives one of his funniest performances.",

  "The Shop Around the Corner":
    "Jimmy gives Alfred Kralik one of his most complete romantic performances, making him proud, awkward, funny, jealous and deeply vulnerable. His chemistry with Margaret Sullavan makes even the quieter moments feel completely natural.",

  "Pot o’ Gold":
    "Jimmy is pleasant, musical and easygoing as Jimmy Haskell, bringing plenty of charm to a lightweight comedy. The material never asks much from him dramatically, but he remains enjoyable throughout.",

  "It’s a Wonderful Life":
    "Jimmy gives George Bailey extraordinary emotional range, moving naturally between warmth, humor, anger, exhaustion and complete despair. His breakdown and eventual joy make this one of his greatest and most human performances.",

  "Rope":
    "Jimmy gives Rupert Cadell intelligence, confidence and authority before gradually revealing his horror at what his ideas have inspired. His final realization gives the character much more emotional weight than he initially seems to have.",

  "Call Northside 777":
    "Jimmy keeps P. J. McNeal restrained and realistic, allowing the reporter's change from skeptical professional to determined investigator to happen gradually. His understated performance fits the documentary-like style of the movie very well.",

  "On Our Merry Way":
    "Jimmy is funny and physically energetic as Slim, and his relaxed chemistry with Henry Fonda feels completely natural. Their section is so enjoyable that it makes you wish they had been given the entire movie.",

  "Broken Arrow":
    "Jimmy gives Tom Jeffords a calm, thoughtful dignity, creating a western hero who relies more on understanding and negotiation than revenge. His restrained performance fits the movie's more peaceful approach to the genre.",

  "Harvey":
    "Jimmy makes Elwood P. Dowd incredibly gentle, polite and sincere without ever turning him into a joke. His absolute belief in Harvey gives the character warmth while leaving just enough mystery around what is actually happening.",

  "The Jackpot":
    "Jimmy is funny and relatable as Bill Lawrence, an ordinary family man whose supposed good fortune quickly becomes a nightmare. He handles the domestic comedy naturally, even if the role never pushes him very far.",

  "Winchester ’73":
    "Jimmy introduces a much darker western persona as Lin McAdam, a decent man driven by anger, revenge and painful family history. His intensity gives the movie an edge that feels very different from his earlier heroes.",

  "No Highway in the Sky":
    "Jimmy makes Theodore Honey's awkwardness, intelligence and absent-minded behavior funny without making him ridiculous. He also gives the character enough sincerity and determination to make his unusual scientific obsession completely believable.",

  "The Greatest Show on Earth":
    "Jimmy gives Buttons the Clown an unusual mixture of mystery, kindness and sadness, even while hiding behind makeup for the entire movie. His quiet performance makes Buttons one of the film's most interesting characters.",

  "Bend of the River":
    "Jimmy gives Glyn McLyntock the confidence of a traditional western hero while suggesting that his violent past is never far beneath the surface. That struggle makes his attempt at redemption much more interesting.",

  "The Naked Spur":
    "Jimmy gives one of his most intense performances as Howard Kemp, making him bitter, greedy, traumatized and increasingly unstable. His anger feels dangerous because Jimmy never lets you forget how emotionally damaged the character has become.",

  "Rear Window":
    "Jimmy makes Jeff Jefferies curious, funny, stubborn and noticeably flawed while carrying almost the entire thriller from one apartment. His small reactions keep the character engaging even when he can barely physically participate in the action.",

  "The Far Country":
    "Jimmy makes Jeff Webster colder and more selfish than his usual western hero, keeping other people at an emotional distance. His gradual decision to care about the community gives the character a convincing change.",

  "The Man from Laramie":
    "Jimmy keeps Will Lockhart controlled and decent while allowing grief and revenge to constantly threaten that restraint. His quiet anger makes the moments when the character finally loses control much more powerful.",

  "The Man Who Knew Too Much":
    "Jimmy makes Ben McKenna believable as an ordinary father becoming increasingly frightened, stubborn and desperate to recover his son. His emotional reactions give the suspense a personal weight beyond the mystery itself.",

  "The Spirit of St. Louis":
    "Jimmy keeps Charles Lindbergh engaging through small reactions, dry humor and increasingly visible exhaustion despite spending much of the film alone. He makes the physical and mental strain of the flight feel convincing.",

  "Night Passage":
    "Jimmy gives Grant McLaine the familiar decency of one of his western heroes while adding warmth through the accordion scenes and sadness through his relationship with his brother. The character feels comfortable but still distinctly Jimmy.",

  "Vertigo":
    "Jimmy gives probably his darkest performance as Scottie, beginning traumatized and sympathetic before becoming obsessive, controlling and frightening. His familiar likability makes the character's transformation even more disturbing.",

  "Bell, Book and Candle":
    "Jimmy is charming and funny as Shep Henderson, playing his confusion and growing attraction naturally. He works well as the grounded center of the movie, although Kim Novak's magical character is ultimately more unusual.",

  "Anatomy of a Murder":
    "Jimmy gives Paul Biegler a relaxed humor and intelligence that makes him immediately likable while quietly revealing how calculating he can be in court. His understated manipulation is one of the performance's most interesting qualities.",

  "The Man Who Shot Liberty Valance":
    "Jimmy makes Ransom Stoddard idealistic, brave and deeply committed to his principles while also carrying the weight of a secret that follows him for life. His later scenes reveal the character's lasting guilt especially well."
};
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
    sorted.sort((a, b) => a.year - b.year);
  }

  if (value === "year-desc") {
    sorted.sort((a, b) => b.year - a.year);
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
        ${movieReviews[movie.title] || ""}
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
        ? "Hide character description and review"
        : "Read character description and review";
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
                  Select to read about the character and Jimmy’s performance
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

              <div class="movie-detail-block">
                <span class="movie-detail-label">
                  About Jimmy’s character
                </span>

                <strong>${movie.character}</strong>
                <p>${movie.description}</p>
              </div>

              <div class="movie-detail-block personal-review">
                <span class="movie-detail-label">
                  My review of Jimmy
                </span>

                <p>
                  ${movieReviews[movie.title] || "Review coming soon."}
                </p>
              </div>

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
                Read character description and review
              </button>

            </div>

          </div>

          <div
            class="movie-card-description"
            id="card-description-${movieId}"
            hidden
          >

            <div class="movie-detail-block">
              <span class="movie-detail-label">
                About Jimmy’s character
              </span>

              <strong>${movie.character}</strong>
              <p>${movie.description}</p>
            </div>

            <div class="movie-detail-block personal-review">
              <span class="movie-detail-label">
                My review of Jimmy
              </span>

              <p>
                ${movieReviews[movie.title] || "Review coming soon."}
              </p>
            </div>

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
