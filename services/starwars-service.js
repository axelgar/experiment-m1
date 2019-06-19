function StarWarsService() {
  this.baseUrl = 'https://swapi.co/api'
}

StarWarsService.prototype.getAllMovies = async function() {
  var data = await fetch(`${this.baseUrl}/films/`);
  var allFilms = await data.json();
  return allFilms.results;
}

StarWarsService.prototype.getOneFilm = async function(filmId) {
  var data = await fetch(`${this.baseUrl}/films/${filmId}`);
  var oneMovie = await data.json();
  return oneMovie;
}

var starWarsApi = new StarWarsService();