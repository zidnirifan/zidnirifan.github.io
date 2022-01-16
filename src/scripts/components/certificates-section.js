import './certificates-list.js';
import certificates from '../../assets/json/certificates.json';

class CertificatesSection extends HTMLElement {
  constructor() {
    super();
    this.certificatesList = document.createElement('certificates-list');
    this.certificatesList.data = certificates;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `<section class="section certificates" id="certificates">
      <h2 class="section-title">Certificates</h2>
      <div class="certificates-container swiper-container">
        ${this.certificatesList.outerHTML}
        <div class="swiper-pagination pagination-certificates"></div>
      </div>
    </section>`;
  }
}

customElements.define('certificates-section', CertificatesSection);
