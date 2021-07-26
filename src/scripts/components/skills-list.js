import './skill-item.js';

class SkillsList extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }
  render() {
    this._data.forEach((skill) => {
      const skillItem = document.createElement('skill-item');

      skillItem.data = skill;
      this.appendChild(skillItem);
    });
  }
}

customElements.define('skills-list', SkillsList);
