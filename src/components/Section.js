export default class Section {
  constructor({ items, renderer }, cardElementContainerSelector ) {
    this._items = items;
    this._renderer = renderer;
    this._cardContainer = document.querySelector(`.${cardElementContainerSelector}`);
  }

  _addItemAppend(element) {
    this._cardContainer.append(element);
  }

  _addItemPrepend(element) {
    this._cardContainer.prepend(element);
  }

render() {
  this._items.forEach((item) => {
    this._addItemAppend(this._renderer(item));
  });
}

createCard(data) {
  this._addItemPrepend(this._renderer(data))
 }
}
