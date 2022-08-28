import sprite from '../images/symbol-defs.svg';

const getGenresNames = (genresIds, genres) => {
  if (!genresIds || !genresIds.length) return '';
  let genresNames = [];
  genresIds.forEach(genreId => {
    let genreName = genres[genreId];
    if (genreName) genresNames.push(genreName);
  });
  if (genresNames.length > 2)
    return `${genresNames[0]}, ${genresNames[1]}, Other`;
  if (genresNames.length === 2) return `${genresNames[0]}, ${genresNames[1]}`;
  return genresNames[0];
};

// window.addEventListener('click', (e) => console.log(e.target, e.currentTarget))

export const getCardTemplate = (movie, genres) => {
  const {
    original_name,
    original_title,
    poster_path,
    genre_ids,
    vote_average,
    release_date,
  } = movie;
  const correctGenres = getGenresNames(genre_ids, genres);

  return `
    <li class='movies-gallery__item' data-movie='${JSON.stringify({
      ...movie,
      genres: correctGenres,
    })}'>
      <div class='movies-gallery__img'>
        <img
          src='${
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'images/no-poster-available.jpeg'
          }'
          alt='${original_title || original_name}'
          loading='lazy'
          width='395'
        />
      </div>
      <div class='movies-gallery__text'>
        <p class='movies-gallery__title'>${original_title || original_name}</p>
        <p class='movies-gallery__genre ellipsis'>
          ${correctGenres} | ${release_date?.split('-')[0] || '2077'}
        </p>
        <span class='movies-gallery__rating'>${vote_average}</span>
      </div>
    </li>
  `;
};

export const getModalTemplate = (movie, existsInLS) => {
  const {
    original_name,
    original_title,
    poster_path,
    genres,
    popularity,
    vote_average,
    vote_count,
    overview,
  } = movie;

  return `
    <div class="modal-contaner">
      <button class="modal-close" type="button">
        <svg class="modal-btn__icon" width="30" height="30">
            <use href="${sprite}#cross"></use>
        </svg>
      </button>
      <img class="modal-img" src="${
        poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : 'images/no-poster-available.jpeg'
      }" alt="${original_title || original_name}" />
        <div class="modal-block__text">
            <h2 class="modal-title">${original_title || original_name}</h2>
            <ul class="modal-list__key">
                <li class="modal-info">${vote_average} / ${vote_count}</li>
                <li class="modal-info">${popularity}</li>
                <li class="modal-info">${original_title}</li>
                <li class="modal-info">${genres}</li>
            </ul>
            <ul class="modal-list__library">
                <li class="modal-info__library">${vote_average} / ${vote_count}</li>
                <li class="modal-info__library">${popularity}</li>
                <li class="modal-info__library">${original_title}</li>
                <li class="modal-info__library">${genres}</li>
            </ul>
            <h3 class="modal-text__title">About</h3>
            <p>${overview}</p>
            <div class="modal-block__btn">
                <button class="modal-btn__addwatch" type="button">add to watched</button>
                <button class="modal-btn__accent" type="button">${
                  existsInLS ? 'remove from queue' : 'add to queue'
                }</button>
            </div>
        </div>
    </div>
  `;
};
