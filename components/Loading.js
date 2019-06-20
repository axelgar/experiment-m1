'use strict';

function Loading() {
  this.isLoading       = true;
  this.loadingElements = null;
};

Loading.prototype.generateElements = function() {
  this.loadingElements = this.isLoading ? `
  <div class="spinner">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div>
  ` : null;
};