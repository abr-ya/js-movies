import { getTrends } from './api.js';

export const renderTopMovie = async () => {
  const data = await getTrends();
  const movie = data.results[0];
  console.log("top", movie);

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
  //console.log(block);
  block.innerHTML = content;
};