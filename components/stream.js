/**
 * Manages the video element.
 */
class Stream {
  #constraints;
  #streamElement;

  #handleCapture;

  /**
   * Constructs an instance of the `Stream` class.
   * @param {String} streamSelector The relevant CSS selector.
   * @param {Object} handlers Handlers to hook into events.
   * @param {Function} handlers.handleCapture Handles the click event on the Video.
   */
  constructor(streamSelector, {handleCapture}) {
    this.#constraints = {audio: true, video: {height: 498, width: 497}};
    this.#streamElement = document.querySelector(streamSelector);

    this.#handleCapture = handleCapture;

    this.#setEventListeners();
  }

  /**
   * Creates a stream from the user's media device(s).
   */
  createStream() {
    navigator.mediaDevices
        .getUserMedia(this.#constraints)
        .then((mediaStream) => {
          this.#streamElement.srcObject = mediaStream;
        });
  }

  /**
   * Toggles the stream, making it visible.
   */
  toggleStream() {
    this.#streamElement.classList.toggle('stream_display_none');
  }

  /**
   * Sets the appropriate event listeners and attach handlers.
   */
  #setEventListeners() {
    this.#streamElement.addEventListener('click', (event) =>
      this.#handleCapture(event.target),
    );

    this.#streamElement.addEventListener('loadedmetadata', () =>
      this.#streamElement.play(),
    );
  }
}

export default Stream;
