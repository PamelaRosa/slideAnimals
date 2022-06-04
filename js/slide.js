export default class Slide {
  constructor(slideWrapper, slide) {
    this.slideWrapper = document.querySelector(slideWrapper);
    this.slide = document.querySelector(slide);
  }

  onStart(event) {
    event.preventDefault();
    this.wrapper.addEventListener("mousedown", this.onMove);
  }

  onMove(event) {}

  onEnd(event) {
    this.wrapper.removeEventListener("mousedown", this.onMove);

  }

  addSlideEvents() {
    this.slideWrapper.addEventListener("mousedown", this.onStart);
    this.slideWrapper.addEventListener("mouseup", this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
