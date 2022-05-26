/**
 * Manages the Canvas element used for drawing frames from the
 * video stream.
 */
class Canvas {
  #canvasContext;
  #canvasElement;
  #canvasSelector;

  #handleClick;

  /**
   * Constructs an instance of the `Canvas` class.
   * @param {String} canvasSelector The relevant CSS selector.
   * @param {Object} handlers Handlers to hook into events.
   * @param {Function} handlers.handleClick Handles the click event on the Canvas.
   */
  constructor(canvasSelector, { handleClick }) {
    this.#canvasSelector = canvasSelector;
    this.#canvasElement = document.querySelector(canvasSelector);
    this.#canvasContext = this.#canvasElement.getContext("2d");

    this.#handleClick = handleClick;

    this.#setEventListeners();
  }

  /**
   * Receives an image and draws it onto the canvas.
   * Also, it leverages Caman to apply the extended Posterize filter.
   * @param {HTMLVideoElement} image Represents the current stream.
   */
  draw(image) {
    this.#canvasContext.drawImage(image, 0, 0);

    // eslint-disable-next-line new-cap
    Caman(this.#canvasSelector, function () {
      this.posterize(5);
      this.render();
    });
  }

  /**
   * Toggles the canvas, making it visible.
   */
  toggleCanvas() {
    this.#canvasElement.classList.toggle("canvas_display_none");
  }

  /**
   * Sets the appropriate event listeners and attach handlers.
   */
  #setEventListeners() {
    this.#canvasElement.addEventListener("click", this.#handleClick);
  }
}

export default Canvas;
