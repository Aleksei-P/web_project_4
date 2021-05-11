export default class Section {
  constructor({ items, renderer }, cardElementContainerSelector ) {
    this._items = items;
    this._renderer = renderer;
    this._cardContainer = document.querySelector(`.${cardElementContainerSelector}`);
  }

  addItem(element) {
    this._cardContainer.prepend(element);
  }

render() {
  this._items.forEach((item) => {
    this.addItem(this._renderer(item))
  });
}

createCard(data) {
   this.addItem(this._renderer(data))
 }
}
