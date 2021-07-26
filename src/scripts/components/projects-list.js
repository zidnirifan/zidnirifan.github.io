import './project-item.js';

class ProjectsList extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }
  render() {
    this.classList = 'swiper-wrapper';
    this._data.forEach((project) => {
      const projectItem = document.createElement('project-item');

      projectItem.data = project;
      this.appendChild(projectItem);
    });
  }
}

customElements.define('projects-list', ProjectsList);
