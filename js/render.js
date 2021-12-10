import { getTrends, getList } from './api.js';

const renderTopMovie = (movie) => {
  const name = movie.name || movie.title;
  const content = `
    <div class="container film-week__container" data-rating="${movie.vote_average}">
      <div class="film-week__poster-wrapper">
        <img
          class="film-week__poster"
          src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}"
          alt="постер ${name}"
        >
        <p class="film-week__title_origin">${movie.original_name || movie.original_title}</p>
      </div>
      <h2 class="film-week__title">${name}</h2>
      <a class="film-week__watch-trailer tube" href="https://youtu.be/V0hagz_8L3M" aria-label="смотреть трейлер"></a>
    </div>  
  `;
  const block = document.querySelector('.film-week');
  block.innerHTML = content;
};

const createImgPath = (fileName) => `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${fileName}`;

const renderCard = (item) => (`
  <li class="other-films__item">
    <a
      class="other-films__link"
      ${item.vote_average && `data-rating="${item.vote_average}"`}
    >
      <img
        class="other-films__img"
        src="${createImgPath(item.poster_path)}"
        alt="${item.name || item.title}"
      >
    </a>
  </li>
`);

const renderCards = (films) => {
  const block = document.querySelector('.other-films__list');
  const preHtml = films.map(item => renderCard(item));
  // console.log(preHtml);
  block.innerHTML = preHtml.join('\n');
};

const renderPage = (data, otherTitle = 'другие фильмы ...') => {
  const [topMovie, ...otherMovies] = data.results;
  otherMovies.length = 12;
  console.log("data for page: ", topMovie, otherMovies);

  renderTopMovie(topMovie);
  renderCards(otherMovies);
  document.querySelector('.other-films__title').textContent = otherTitle;
}

export const getAndRenderTrends = async () => {
  const data = await getTrends();
  renderPage(data);
};

const optReplace = (str) => {
  if (str === 'mv') return 'movie';
  if (str === 'pop') return 'popular';
  if (str === 'top') return 'top_rated';
  return str;
};

// type: movie, tv
// list: top_rated, popular
export const getAndRenderCards = async (key) => {
  if (key === 'trend') {
    getAndRenderTrends();
  } else {
    const [... listOpt] = key.split('_');
    const listOptForRequest = listOpt.map(el => optReplace(el));
    // console.log(listOptForRequest);
    const data = await getList(...listOptForRequest);
    if (data) renderPage(data);
  }
};
