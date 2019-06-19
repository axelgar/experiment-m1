'use strict';

function Home() {
  this.pageElements = null;
}

Home.prototype.generateElements = function() {
  this.pageElements = `
    <h1>Home Page</h1>
    <p>This web site has all the information you need to become the best star wars fan ever<p>
  `;
}