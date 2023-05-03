import './skills-list.js';
import skillsList from '../../assets/json/skills.json';

class SkillsSection extends HTMLElement {
  constructor() {
    super();
    this.frontEndSkills = document.createElement('skills-list');
    this.frontEndSkills.data = skillsList.frontEnd.stack;

    this.backEndSkills = document.createElement('skills-list');
    this.backEndSkills.data = skillsList.backEnd.stack;

    this.cloudSkills = document.createElement('skills-list');
    this.cloudSkills.data = skillsList.cloudComputing.stack;
  }

  connectedCallback() {
    this.render();

    const skillsHeader = this.querySelectorAll('.skills-header');

    skillsHeader.forEach((e) => e.addEventListener('click', this.toggleSkills));
  }

  toggleSkills(e) {
    if (e.target.classList.contains('skills-header')) {
      e.target.parentElement.classList.toggle('skills-open');
    } else {
      e.target.parentElement.parentElement.classList.toggle('skills-open');
    }
  }

  render() {
    this.innerHTML = /* html */ `<section class="skills section" id="skills">
      <h2 class="section-title">Skills</h2>
      <div class="skills-container grid">

      <div class="skills-content skills-open be-skill">
          <div class="skills-header">
            <i class="uil uil-server-network skills-icon"></i>
            <h3 class="skills-title">Back-End Development</h3>
            <i class="uil uil-angle-down skills-arrow"></i>
          </div>
          <div class="skills-list">
          <p class="skill-desc">${skillsList.backEnd.desc}</p>
            ${this.backEndSkills.outerHTML}
          </div>
        </div>

        <div class="skills-content">
          <div class="skills-header">
            <i class="uil uil-brackets-curly skills-icon"></i>
            <h3 class="skills-title">Front-End Development</h3>
            <i class="uil uil-angle-down skills-arrow"></i>
          </div>
          <div class="skills-list">
          <p class="skill-desc">${skillsList.frontEnd.desc}</p>
           ${this.frontEndSkills.outerHTML}
          </div>
        </div>

        <div class="skills-content cloud-skill">
          <div class="skills-header">
            <i class="uil uil-cloud-data-connection skills-icon"></i>
            <h3 class="skills-title">Cloud Computing</h3>
            <i class="uil uil-angle-down skills-arrow"></i>
          </div>
          <div class="skills-list">
          <p class="skill-desc">${skillsList.cloudComputing.desc}</p>
            ${this.cloudSkills.outerHTML}
          </div>
        </div>

      </div>
    </section>`;
  }
}

customElements.define('skills-section', SkillsSection);
