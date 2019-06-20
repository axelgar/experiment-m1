'use strict';

function main() {
  var rootElement = document.querySelector('#root');
  var layout      = null;
  var ENTRY_POINT = '/'

  layout = generateLayoutComponent();
  layout.generateNavbar();
  var links = document.querySelectorAll('nav a');
  
  activateRouter(ENTRY_POINT);

  links.forEach((link) => {
    link.addEventListener('click', function(event) {
      activateRouter(event.target.attributes.url.nodeValue)
    });
  });

  async function activateRouter(url) {
    router.url = url;
    router.mainContainer = layout.main;
    await router.generatepageBasedOnUrl();
    router.render();
  }

  function generateLayoutComponent() {
    var layoutElement = new Layout(rootElement);
    layoutElement.generateLayout();
    layoutElement.render();
    layoutElement.getMainElements();
    return layoutElement;
  };
};

window.addEventListener('load', main);