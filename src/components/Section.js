export default class Section {
  constructor({ items, renderer }, cardElementContainerSelector ) {
    this._items = items;
    this._renderer = renderer;
    this._cardContainer = document.querySelector(`.${cardElementContainerSelector}`);
  }

  addItemAppend(element) {
    this._cardContainer.append(element);
  }

  addItemPrepend(element) {
    this._cardContainer.prepend(element);
  }

render() {
  this._items.forEach((item) => {
    this.addItemAppend(this._renderer(item));
  });
}

createCard(data) {
  this.addItemPrepend(this._renderer(data))
 }
}
