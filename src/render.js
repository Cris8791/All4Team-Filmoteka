function renderMoviesList(list) {
  console.log('list->', list);
  const markup = list
    .map(({ id, poster_path, title, genres, release_year, vote_average }) => {
      // adaug elemente in markup
      return `<div>
    <img id="${id}" src="${poster_path}" alt="movie poster" loading="lazy" />
            <p>   ${title} </p>
            <p> ${genres} ${release_year} ${vote_average} </p>
        </div>`;
    })
    .join('');
  const moviesDivElem = document.querySelector('.movies-div');
  moviesDivElem.innerHTML = markup;
}

function renderPaginationButtons(crtPage, totalPages) {
  if (totalPages === 1) return;
  let leftMarkup = `<div class="buttons-div">
      <button id="lftarwBtn">&larr;</button>
      <button id="oneBtn">1</button>
      <button id="lftdotBtn">...</button>`;
  let rigthMarkup = `
      <button id="rgtdotBtn">...</button>
      <button>${totalPages}</button>
      <button id="rgtarwBtn">&rarr;</button>
    </div>`;
  let minPage, maxPage, crtBtn;

  // midMarkup
  switch (crtPage) {
    case 1:
      minPage = 1;
      maxPage = 3;
      break;
    case 2:
      minPage = 1;
      maxPage = 4;
      break;
    default:
      minPage = crtPage - 2;
      maxPage = crtPage + 2;
  }
  if (maxPage >= totalPages) maxPage = totalPages - 1;
  let midMarkup = '';
  for (let i = minPage; i <= maxPage; i++) {
    if (i === 1) continue;
    midMarkup += `<button>${i}</button>`;
  }
  let markup = leftMarkup + midMarkup + rigthMarkup;

  //insert the markup beforeend of body
  const bodyElem = document.querySelector('body');
  bodyElem.insertAdjacentHTML('beforeend', markup);

  //select the needed button elements
  const lftarwBtn = document.querySelector('#lftarwBtn');
  const lftdotBtn = document.querySelector('#lftdotBtn');
  const rgtdotBtn = document.querySelector('#rgtdotBtn');
  const rgtarwBtn = document.querySelector('#rgtarwBtn');

  //hide the proper buttons
  if (crtPage >= 1 && crtPage <= 4) {
    lftdotBtn.style.display = 'none';
    crtBtn = crtPage + 1;
  }
  if (crtPage === 1) {
    lftarwBtn.style.display = 'none';
    crtBtn = 1;
  }
  if (crtPage > 4) crtBtn = 6;
  if (totalPages - maxPage < 2) rgtdotBtn.style.display = 'none';
  if (crtPage === totalPages) rgtarwBtn.style.display = 'none';

  //select the pagination container element for next actions
  const pagContainer = document.querySelector('.buttons-div');
}

export { renderMoviesList, renderPaginationButtons };
