'use strict';

function Movies(movies) {
  this.movies = movies;
  this.pageElements = null;
}

Movies.prototype.handleClick = function() {
  console.log('id')
}

Movies.prototype.generateElements = function() {
  this.pageElements = this.movies.map(function(movie) {
    return (`
    <div class="movie-card"> 
      <h3>${movie.title}<h3>
      <p>${movie.release_date}<p>
      <p>${movie.director}<p>
      <p>${movie.producer}<p>
      <a href="#0" onclick="return async function(event) {
        var page = new Page('/movies/details');
        page.mainContainer = document.querySelector('main');
        page.movieId = ${movie.episode_id};
        await page.generatepageBasedOnUrl();
        page.render();
      }()">See more bout the film ...</a>
    </div>
  `)
  }).toString().split(',').join('');
}