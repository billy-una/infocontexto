import { renderSlide } from "./SlideComponent.js";

export class SlideManager {
  constructor({ mount, label, progress, warning, warningSeconds, onSlideEnd }) {
    this.mount = mount;
    this.label = label;
    this.progress = progress;
    this.warning = warning;
    this.warningSeconds = warningSeconds;
    this.onSlideEnd = onSlideEnd;
    this.page = null;
    this.slideIndex = 0;
    this.elapsed = 0;
  }

  loadPage(page) {
    this.page = page;
    this.slideIndex = 0;
    this.elapsed = 0;
    this.render();
  }

  goToSlide(index) {
    if (!this.page) return;
    this.slideIndex = Math.max(0, Math.min(index, this.page.slides.length - 1));
    this.elapsed = 0;
    this.render();
  }

  tick(deltaSeconds) {
    if (!this.page) return;
    const slide = this.currentSlide();
    this.elapsed += deltaSeconds;

    if (this.elapsed >= slide.seconds) {
      this.onSlideEnd();
      return;
    }

    this.updateUi();
  }

  hasNextSlide() {
    return this.page && this.slideIndex < this.page.slides.length - 1;
  }

  nextSlide() {
    this.goToSlide(this.slideIndex + 1);
  }

  currentSlide() {
    return this.page.slides[this.slideIndex];
  }

  render() {
    this.mount.innerHTML = renderSlide(this.currentSlide(), this.page);
    this.updateUi();
  }

  updateUi() {
    const slide = this.currentSlide();
    const ratio = Math.min(100, (this.elapsed / slide.seconds) * 100);
    const remaining = Math.ceil(slide.seconds - this.elapsed);

    this.label.textContent = `Slide ${this.slideIndex + 1} de ${this.page.slides.length}`;
    this.progress.style.width = `${ratio}%`;
    this.warning.classList.toggle("visible", remaining <= this.warningSeconds);
    this.warning.classList.toggle("critical", remaining <= 5);
  }
}
