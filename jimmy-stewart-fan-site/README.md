# My Jimmy Stewart Journey

A responsive Jimmy Stewart fan site built with plain HTML, CSS, and JavaScript.

## Features

- 26 watched films from 1938 through 1962
- Jimmy Stewart's character name for every movie
- Director and primary genre
- Search by movie, character, director, genre, or year
- Filters for director and genre
- Sorting by year, title, director, or genre
- Responsive movie cards on mobile
- Placeholder star ratings ready for Ace's personal rankings

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, and `script.js`.
3. Open the repository's **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)`, then save.

GitHub will provide the public website address.

## Adding another movie

Open `script.js` and add another entry to the `movies` array:

```js
{
  year: 1963,
  title: "Movie Title",
  character: "Character Name",
  director: "Director Name",
  genre: "Primary Genre"
}
```

The table, filters, statistics, and mobile cards update automatically.
