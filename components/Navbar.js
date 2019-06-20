'use strcit';

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
          <a href="#" url="/">Home</a>
        </li>
        <li>
          <a href="#" url="/movies">Movies</a>
        </li>
        <li>
          <a href="#" url="/species">Species</a>
        </li>
      </ul>
    </nav>
  `
};

Navbar.prototype.render = function() {
  this.headerContainer.appendChild(this.navbarEelements);
};