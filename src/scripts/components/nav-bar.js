class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();

    const navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

    navToggle.addEventListener('click', this.showMenu);
    navClose.addEventListener('click', this.closeMenu);

    const navLink = document.querySelectorAll('.nav-link');

    navLink.forEach((e) => e.addEventListener('click', this.closeMenu));
  }

  showMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.add('show-menu');
  }

  closeMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
  }

  render() {
    this.innerHTML = /* html */ `<nav class="nav">
      <a href="#" class="nav-logo"
        ><img src="src/assets/images/my-logo.svg" alt="zidni logo" />Zidni</a
      >
      <div class="nav-menu" id="nav-menu">
        <ul class="nav-list grid">
          <li class="nav-item">
            <a href="#home" class="nav-link active-link"
              ><i class="uil uil-estate nav-icon"></i> Home</a
            >
          </li>
          <li class="nav-item">
            <a href="#skills" class="nav-link">
              <i class="uil uil-file-alt nav-icon"></i> Skills
            </a>
          </li>
          <li class="nav-item">
            <a href="#history" class="nav-link"
              ><i class="uil uil-clock nav-icon"></i> History</a
            >
          </li>
          <li class="nav-item">
            <a href="#project" class="nav-link">
              <i class="uil uil-scenery nav-icon"></i> Project
            </a>
          </li>
          <li class="nav-item">
            <a href="#certificates" class="nav-link">
              <i class="uil uil-award nav-icon"></i> Certificates
            </a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">
              <i class="uil uil-phone nav-icon"></i> Contact
            </a>
          </li>
        </ul>
        <i class="uil uil-times nav-icon nav-close" id="nav-close"></i>
      </div>
      <div class="nav-btns">
        <!-- Change Theme -->

        <i class="uil uil-moon change-theme" id="theme-button"></i>

        <div class="nav-toggle" id="nav-toggle">
          <i class="uil uil-apps"></i>
        </div>
      </div>
    </nav>`;
  }
}

customElements.define('nav-bar', NavBar);
