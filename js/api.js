const API_KEY = '1d5dbc36df1d0642e9f48ec01f76312d';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANG = '&language=ru-RU'

const getData = url =>
  fetch(url)
    .then(res => {
      if (res.ok) return res.json();
      throw `что-то не то, ошибка ${res.status}`;
    }) 
    .then(data => data)
    .catch(err => console.error(err));

export const getTrends = async (type = 'all', period = 'day', page = 1) => {
  const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANG}&page=${page}`;
  const data = getData(url);
  return data;
};