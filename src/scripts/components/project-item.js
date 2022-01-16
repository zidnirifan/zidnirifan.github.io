class ProjectItem extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    const featuresList = this._data.feature.map(
      (feature) => `<li class="feature-item">${feature}</li>`
    );
    const stacksList = this._data.stack.map(
      (stack) => `<li class="stack-item">${stack}</li>`
    );

    this.classList = 'project-content grid swiper-slide';
    this.innerHTML = /* html */ `
      <img
        class="project-img"
        src="images/${this._data.img}"
        alt="databola project"
      />
      <div class="project-data">
        <h3 class="project-title">${this._data.title}</h3>
        <p class="project-description">${this._data.description}</p>
        <div class="project-feature">
          <p class="feature-title">Feature :</p>
          <ul class="feature-list">
            ${featuresList.join('')}
          </ul>
        </div>
        <div class="project-stack">
          <p class="stack-title">Stack :</p>
          <ul class="stack-list">
            ${stacksList.join('')}
          </ul>
        </div>
        <a href="${this._data.demo}" target="_blank" class="button btn-demo"
          >Demo <i class="uil uil-window"></i
        ></a>
        <a
          href="${this._data.code}"
          target="_blank"
          class="button btn-code"
          >Code <i class="uil uil-arrow"></i
        ></a>
      </div>
    `;
  }
}

customElements.define('project-item', ProjectItem);
