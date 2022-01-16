import './history-item.js';

class HistoryList extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }
  render() {
    this._data.forEach((history) => {
      const historyItem = document.createElement('history-item');

      historyItem.data = history;
      this.appendChild(historyItem);
    });
  }
}

customElements.define('history-list', HistoryList);
