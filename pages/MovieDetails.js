'use strict';

function MovieDetails(movie) {
  this.movie        = movie;
  this.pageElements = null;
}

MovieDetails.prototype.generateElements = function() {
  this.pageElements = `
    <h1>${this.movie.title}</h1>
    <p>${this.movie.director}</p>
    <p>${this.movie.producer}</p>
    <p>${this.movie.opening_crawl}</p>
    <date>${this.movie.release_date}</date>
  `;
}