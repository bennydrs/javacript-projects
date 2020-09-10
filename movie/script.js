const apiURL = 'https://api.themoviedb.org/3/movie/popular?api_key=30759d1400edacc3735987280c242f5f&language=en-US&page=1';

const imgPath = 'https://image.tmdb.org/t/p/w1280'
const searchAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=30759d1400edacc3735987280c242f5f&query=';

const main = document.querySelector('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(apiURL)

async function getMovies(url) {
  const res = await fetch(url);
  const resData = await res.json();

  showMovies(resData.results)
  return resData;
}

function showMovies(movies) {
  main.innerHTML = '';
  movies.forEach(movie => {
    const { poster_path, title, vote_average, overview } = movie
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
      <img src="${imgPath + poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview :</h3>
        <p>${overview}</p>
      </div>
      `;
    
    main.appendChild(movieEl)
  });
}

function getClassByRate(vote) {
  if(vote >= 8) {
    return 'green'
  } else if(vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm) {
    getMovies(searchAPI + searchTerm)

    search.value = '';
  }
})
