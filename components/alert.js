class Alert {
  #message;

  constructor(message) {
    this.#message = message;
  }

  generateAlert() {
    const divElement = document.createElement("div");

    const headingElement = document.createElement("h1");
    headingElement.textContent = "Whoops!";

    const messageElement = document.createElement("p");
    messageElement.textContent = this.#message;

    divElement.append(headingElement, messageElement);

    return divElement;
  }
}

export default Alert;
