'use strict';

function Movies(movies) {
  this.movies       = movies;
  this.pageElements = null;
};

Movies.prototype.generateElements = function() {
  this.sortMoviesByEpisodeNumber();
  this.pageElements = this.movies.map(function(movie) {
    return (`
    <div class="movie-card"> 
      <h3>${movie.title}</h3>
      <p>${movie.release_date}</p>
      <p>${movie.director}</p>
      <p>${movie.producer}</p>
      <a href="#0" onclick="return async function() {
        router.url = '/movies/details';
        router.mainContainer = document.querySelector('main');
        router.movieTitle = '?search=${movie.title}';
        await router.generatepageBasedOnUrl();
        router.render();
      }()">See more bout the film ...</a>
    </div>
  `)
  }).toString().split(',').join('');
};

Movies.prototype.sortMoviesByEpisodeNumber = function() {
  this.movies.sort(function(movie1, movie2) {
    return movie1.episode_id - movie2.episode_id
  });
}