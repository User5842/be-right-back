class Root {
  #rootElement;

  constructor(rootSelector) {
    this.#rootElement = document.querySelector(rootSelector);
  }

  inject(element) {
    this.#rootElement.append(element);
  }
}

export default Root;
