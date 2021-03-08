const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
        <a class="navbar-brand title" href="#">Passably Pinterest</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="boards">Boards</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="pins">Pins</a>
            </li>
          </ul>
          <div id="logout-button"></div>
        </div>
      </nav>
    `;
};

export default navBar;
