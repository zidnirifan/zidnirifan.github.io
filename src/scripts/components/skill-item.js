class SkillItem extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `<div class="skill-item">
      <div>
        <img
          src="src/assets/images/${this._data.logo}"
          alt="${this._data.name}"
          class="skills-logo"
        />
        <span class="skill-name">${this._data.name}</span>
      </div>
    </div>`;
  }
}

customElements.define('skill-item', SkillItem);
