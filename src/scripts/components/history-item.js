class HistoryItem extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `<li class="history-item grid">
      <div>
        <span class="history-rounder"></span>
        <span class="history-line"></span>
      </div>
      <div>
        <h4 class="history-title">${this._data.title}</h4>
        <p class="history-subtitle">${this._data.subtitle}</p>
        <div class="history-date">
          <i class="uil uil-calendar-alt"></i>
          ${this._data.date}
        </div>
      </div>
    </li>`;
  }
}

customElements.define('history-item', HistoryItem);
