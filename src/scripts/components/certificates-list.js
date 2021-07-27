import './certificate-item.js';

class certificatesList extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.classList = 'swiper-wrapper';
    this._data.forEach((certificate) => {
      const certificateItem = document.createElement('certificate-item');

      certificateItem.data = certificate;
      this.appendChild(certificateItem);
    });
  }
}

customElements.define('certificates-list', certificatesList);
