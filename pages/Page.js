'use strict';

function Page(url, mainContainer) {
  this.url              = url;
  this.mainContainer    = mainContainer;
  this.loadingComponent = new Loading();
  this.page             = null;
  this.movies           = null;
  this.movie            = null;
  this.movieTitle       = null;
};

Page.prototype.generatepageBasedOnUrl = async function() {
  this.loadingComponent.generateElements();
  this.mainContainer.innerHTML = this.loadingComponent.loadingElements;
  switch(this.url) {
    case '/':
      this.generateHomePage();
      break;
    case '/movies':
      await this.generateMoviesPage();
      break;
    case '/movies/details':
      await this.generateDetailsMoviePage();
      break;
    default:
      this.generateNotFoundPage();
  };
};

Page.prototype.render = function() {
  this.page.generateElements();
  this.mainContainer.innerHTML = this.page.pageElements;
};

Page.prototype.generateHomePage = function() {
  this.page = new Home();
};

Page.prototype.generateNotFoundPage = function() {
  this.page = new NotFound();
};

Page.prototype.generateMoviesPage = async function() {
  this.movies = await starWarsApiService.getAllMovies();
  this.page   = new Movies(this.movies, this.mainContainer);
};

Page.prototype.generateDetailsMoviePage = async function() {
  var response = await starWarsApiService.getOneFilm(this.movieTitle);
  this.movie   = response.results[0];
  this.page    = new MovieDetails(this.movie);
};