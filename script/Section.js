
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
    this._renderer(item)
  });
}
}

/*
export default class Section {
  constructor({ items, renderer }, cardElements) {
    this._items = items;
    this._renderer = renderer;
    this._xxx = cardElements;
  }

  loadCard(_cardTemplate) {
    this._xxx.prepend(createCard(data));
  }


  render() {
    this._items.forEach((data) => {
      this.loadCard(data)
    });
  }
}
*/
