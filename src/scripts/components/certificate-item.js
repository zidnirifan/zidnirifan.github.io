class CertificateItem extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.classList = 'certificate-item swiper-slide';
    this.innerHTML = /* html */ `
      <a
        href="${this._data.href}"
        target="_blank"
      >
        <img
          src="src/assets/images/${this._data.img}"
          alt="mfwde certificate"
          class="certificate-img"
        />
      </a>
      <a
        href="${this._data.href}"
        target="_blank"
      >
        <h3 class="certificate-title">${this._data.title}</h3>
      </a>
      <p class="certificate-subtitle">${this._data.subtitle}</p>
    `;
  }
}

customElements.define('certificate-item', CertificateItem);
