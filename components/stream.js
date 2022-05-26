class Stream {
  #constraints;
  #streamElement;

  #handleCapture;

  constructor(streamSelector, { handleCapture }) {
    this.#constraints = { audio: true, video: { height: 500, width: 500 } };
    this.#streamElement = document.querySelector(streamSelector);

    this.#handleCapture = handleCapture;

    this.#setEventListeners();
  }

  createStream() {
    navigator.mediaDevices
      .getUserMedia(this.#constraints)
      .then((mediaStream) => {
        this.#streamElement.srcObject = mediaStream;
      });
  }

  toggleStream() {
    this.#streamElement.classList.toggle("stream_display_none");
  }

  #setEventListeners() {
    this.#streamElement.addEventListener("click", (event) =>
      this.#handleCapture(event.target)
    );

    this.#streamElement.addEventListener("loadedmetadata", () =>
      this.#streamElement.play()
    );
  }
}

export default Stream;
