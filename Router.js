'use strict';

function Router() {
  this.url              = null;
  this.mainContainer    = null;
  this.page             = null;
  this.movies           = null;
  this.movie            = null;
  this.movieTitle       = null;
  this.loadingComponent = new Loading();
};

Router.prototype.generatepageBasedOnUrl = async function() {
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

Router.prototype.generateHomePage = function() {
  this.page = new Home();
};

Router.prototype.generateNotFoundPage = function() {
  this.page = new NotFound();
};

Router.prototype.generateMoviesPage = async function() {
  if(!this.movies) {
    this.movies = await starWarsApiService.getAllMovies();
  }
  this.page   = new Movies(this.movies, this.mainContainer);
};

Router.prototype.generateDetailsMoviePage = async function() {
  this.movie = await starWarsApiService.getOneFilm(this.movieTitle);
  this.page    = new MovieDetails(this.movie);
};

Router.prototype.render = function() {
  this.page.generateElements();
  this.mainContainer.innerHTML = this.page.pageElements;
};

var router = new Router();