'use strict';

function Page(url, mainContainer) {
  this.url = url;
  this.mainContainer = mainContainer;
  this.page = null;
  this.movies = null;
  this.movie = null;
  this.loadingComponent = new Loading();
  this.movieId = null;
}

Page.prototype.generateMoviesPage = async function() {
  this.movies = await starWarsApi.getAllMovies();
  this.page = new Movies(this.movies, this.mainContainer);
  this.page.generateElements();
}

Page.prototype.generateDetailsMoviePage = async function() {
  this.movie = await starWarsApi.getOneFilm(this.movieId);
  this.page = new MovieDetails(this.movie);
  this.page.generateElements();
}

Page.prototype.generateHomePage = function() {
  this.page = new Home();
  this.page.generateElements();
}

Page.prototype.generateNotFoundPage = function() {
  this.page = new NotFound();
  this.page.generateElements();
}

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
  }
}

 Page.prototype.render = function() {
   this.mainContainer.innerHTML = this.page.pageElements;
 }