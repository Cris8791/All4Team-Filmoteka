function renderMoviesList(list) {
  const markup = list
    .map(({ poster_path, title, genres, release_year, vote_average }) => {
      // adaug elemente in markup
      return `<div>
    <img src="${poster_path}" alt="movie poster" loading="lazy" />
            <p>   ${title} </p>
            <p> ${genres} ${release_year} ${vote_average} </p>
        </div>`;
    })
    .join('');
  const bodyElem = document.querySelector('body');
  bodyElem.insertAdjacentHTML('beforeend', markup);
}
