class Canvas {
  #canvasContext;
  #canvasElement;
  #canvasSelector;

  #handleClick;

  constructor(canvasSelector, { handleClick }) {
    this.#canvasSelector = canvasSelector;
    this.#canvasElement = document.querySelector(canvasSelector);
    this.#canvasContext = this.#canvasElement.getContext("2d");

    this.#handleClick = handleClick;

    this.#setEventListeners();
  }

  draw(image) {
    this.#canvasContext.drawImage(image, 0, 0);
    Caman(this.#canvasSelector, function () {
      this.posterize(5);
      this.render();
    });
  }

  toggleCanvas() {
    this.#canvasElement.classList.toggle("canvas_display_none");
  }

  #setEventListeners() {
    this.#canvasElement.addEventListener("click", this.#handleClick);
  }
}

export default Canvas;
