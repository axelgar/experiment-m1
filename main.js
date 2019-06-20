'use strict';

function main() {
  var rootElement = document.querySelector('#root');
  var layout      = null;
  var ENTRY_POINT = '/'

  layout = generateLayoutComponent();
  layout.generateNavbar();
  layout.generatePage(ENTRY_POINT);

  var links = document.querySelectorAll('nav a');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      layout.generatePage(event.target.attributes.url.nodeValue);
    });
  });

  function generateLayoutComponent() {
    var layoutElement = new Layout(rootElement);
    layoutElement.generateLayout();
    layoutElement.render();
    layoutElement.getMainElements();
    return layoutElement;
  };
};

window.addEventListener('load', main);