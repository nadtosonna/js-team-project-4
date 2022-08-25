const getGenresNames = (genresIds, genres) => {
  if (!genresIds || !genresIds.length) return '';
  let genresNames = [];
  genresIds.forEach(genreId => {
    let genreName = genres[genreId];
    if (genreName) genresNames.push(genreName);
  });
  if (genresNames.length > 2)
    return `${genresNames[0]}, ${genresNames[1]}, Other |`;
  if (genresNames.length === 2) return `${genresNames[0]}, ${genresNames[1]} |`;
  return `${genresNames[0]} |`;
};

export const getCardTemplate = (
  {
    original_name,
    original_title,
    poster_path,
    genre_ids,
    vote_average,
    release_date,
  },
  genres
) => `
    <li class="movies-gallery__item">
      <div class="movies-gallery__img">
        <img
          src="${
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'images/no-poster-available.jpeg'
          }"
          alt="${original_title || original_name}"
          loading="lazy"
          width="395"
        />
      </div>
      <div class="movies-gallery__text">
        <p class="movies-gallery__title">${original_title || original_name}</p>
        <p class="movies-gallery__genre ellipsis">
          ${getGenresNames(genre_ids, genres)} ${
  release_date?.split('-')[0] || '2077'
} <span class="movies-gallery__rating">${vote_average}</span>
        </p>
      </div>
    </li>
  `;
