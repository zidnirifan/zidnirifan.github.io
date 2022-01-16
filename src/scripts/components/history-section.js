import './history-list.js';
import historyList from '../../assets/json/history.json';

class HistorySection extends HTMLElement {
  constructor() {
    super();
    this.educationList = document.createElement('history-list');
    this.educationList.data = historyList.education;

    this.experienceList = document.createElement('history-list');
    this.experienceList.data = historyList.experience;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `<section class="history section" id="history">
      <h2 class="section-title">History</h2>
      <div class="history-container grid">
        <div class="education">
          <h3 class="education-title">
            <i class="uil uil-graduation-cap"></i> Education
          </h3>
          <ul class="history-list">
            ${this.educationList.outerHTML}
          </ul>
        </div>
        <div class="experience">
          <h3 class="experience-title"><i class="uil uil-bag-alt"></i> Experience</h3>
          <ul class="history-list">
            ${this.experienceList.outerHTML}
          </ul>
        </div>
      </div>
    </section>`;
  }
}

customElements.define('history-section', HistorySection);
