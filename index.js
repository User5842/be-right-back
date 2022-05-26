import Canvas from "./components/canvas.js";
import Stream from "./components/stream.js";
import { showSection } from "./utils/utils.js";

const audio = new Audio("./files/be-right-back.mp3");

const mainSection = document.querySelector(".page_section_main");
const supportSection = document.querySelector(".page_section_support");

const canvas = new Canvas(".canvas", {
  handleClick: () => {
    canvas.toggleCanvas();
  },
});

const { matches } = window.matchMedia("(min-width: 768px)");

if (matches && "mediaDevices" in navigator) {
  const stream = new Stream(".stream", {
    handleCapture: (streamElement) => {
      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }

      audio.play();
      canvas.draw(streamElement);
      canvas.toggleCanvas();
    },
  });

  stream.createStream();
  stream.toggleStream();

  showSection(mainSection);
} else {
  showSection(supportSection);
}
