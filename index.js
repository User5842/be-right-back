import Alert from "./components/alert.js";
import Canvas from "./components/canvas.js";
import Root from "./components/root.js";
import Stream from "./components/stream.js";

const audio = new Audio("./files/be-right-back.mp3");

const canvas = new Canvas(".canvas", {
  handleClick: () => {
    canvas.toggleCanvas();
  },
});
const root = new Root("#root");

if (Modernizr.getusermedia) {
  const stream = new Stream(".stream", {
    handleCapture: (streamElement) => {
      audio.play();
      canvas.draw(streamElement);
      canvas.toggleCanvas();
    },
  });

  stream.createStream();
  stream.toggleStream();
} else {
  const alert = new Alert(
    "The device you're using does not support `getUserMedia.` Please try again on another device."
  );

  root.inject(alert.generateAlert());
}
