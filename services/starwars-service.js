'use strict';

function StarWarsService() {
  this.baseUrl = 'https://swapi.co/api';
};

StarWarsService.prototype.getAllMovies = async function() {
  try {
    var data     = await fetch(`${this.baseUrl}/films/`);
    var allFilms = await data.json();
    return allFilms.results;
  }
  catch(error) {
    console.error(error)
  }
};

StarWarsService.prototype.getOneFilm = async function(filmId) {
  try {
    var data     = await fetch(`${this.baseUrl}/films/${filmId}`);
    var oneMovie = await data.json();
    return oneMovie;
  }
  catch(error) {
    console.error(error)
  }
};

var starWarsApiService = new StarWarsService();