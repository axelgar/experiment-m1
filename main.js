'use strict';

function main() {
  var rootElement = document.querySelector('#root');
  var layout = null;
  var ENTRY_POINT = 'Home'

  layout = generateLayout();
  layout.generateNavbar();
  layout.generatePage(ENTRY_POINT);

  var links = document.querySelectorAll('nav a');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      layout.generatePage(event.target.innerText);
    })
  });
  //TODO ------ Add Footer

  function generateLayout() {
    var layoutElement = new Layout(rootElement)
    layoutElement.generateLayout();
    layoutElement.render();
    layoutElement.getMainElements();
    return layoutElement;
  };
};

window.addEventListener('load', main)