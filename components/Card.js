export default class Card {
  constructor({ data }, cardSelector) {
    this._url = data.urlToImage;
    this._title = data.title;
    this._description = data.description;
    this._link = data.url;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".swiper-slide")
      .cloneNode(true);
    return cardElement;
  }

  _checkDescription() {
    if (this._description.match(/<a\s.+?>.*?<\/a>/g)) {
      const RegExp = new RegExp("<a[^>]+>(.+?)</a>", "gim");
      const cleanText = this._description.replace(RegExp, "$1");
      this._description = cleanText;
    }
  }

  generateCard() {
    this._checkDescription();
    this._element = this._getTemplate();
    this._elementLink = this._element.querySelector(".element").href =
      this._link;
    this._elementImage = this._element.querySelector(".element__image");
    this._elementImage.onerror = () => this._element.remove();
    this._element
      .querySelector(".element__info")
      .querySelector(".element__title").textContent = this._title;
    this._element
      .querySelector(".element__info")
      .querySelector(".element__description").textContent = this._description;
    this._elementImage.src = this._url;
    this._elementImage.alt = this._title;
    return this._element;
  }
}
