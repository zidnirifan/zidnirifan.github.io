import './projects-list.js';
import projects from '../../assets/json/projects.json';

class ProjectSection extends HTMLElement {
  constructor() {
    super();
    this.projectsList = document.createElement('projects-list');
    this.projectsList.data = projects;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `<section class="section project" id="project">
      <h2 class="section-title">Personal Project</h2>
      <div class="project-container swiper-container">
          ${this.projectsList.outerHTML}
        <div class="swiper-button-next">
          <i class="uil uil-angle-right-b swiper-project-icon"></i>
        </div>
        <div class="swiper-button-prev">
          <i class="uil uil-angle-left-b swiper-project-icon"></i>
        </div>
        <div class="swiper-pagination pagination-project"></div>
      </div>
    </section>`;
  }
}

customElements.define('project-section', ProjectSection);
