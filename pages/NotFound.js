'use strict';

function NotFound() {
  this.pageElements = null;
}

NotFound.prototype.generateElements = function() {
  this.pageElements = `
    <h1>404 Not Found</h1>
  `;
}