function Navbar(headerContainer) {
  this.headerContainer = headerContainer;
  this.navbarEelements = null;
};

Navbar.prototype.generateNavbar = function() {
  this.navbarEelements = document.createElement('div');
  this.navbarEelements.innerHTML = `
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">Species</a>
        </li>
      </ul>
    </nav>
  `
};

Navbar.prototype.render = function() {
  this.headerContainer.appendChild(this.navbarEelements);
};