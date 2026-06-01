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
    this.exitTimeout = null;
  }

  loadPage(page) {
    this.page = page;
    this.slideIndex = 0;
    this.elapsed = 0;
    this.render();
  }

  goToSlide(index) {
    if (!this.page) return;
    const nextIndex = Math.max(0, Math.min(index, this.page.slides.length - 1));
    if (nextIndex === this.slideIndex) return;

    this.elapsed = 0;
    this.renderWithExit(() => {
      this.slideIndex = nextIndex;
      this.render();
    });
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
    this.activateMedia();
    this.updateUi();
  }

  renderWithExit(afterExit) {
    clearTimeout(this.exitTimeout);

    const current = this.mount.firstElementChild;
    if (!current) {
      afterExit();
      return;
    }

    current.classList.add("is-exiting");
    this.exitTimeout = setTimeout(afterExit, 260);
  }

  activateMedia() {
    const video = this.mount.querySelector("[data-autoplay-video]");
    if (!video) return;
    const slide = this.currentSlide();

    video.muted = true;
    video.currentTime = 0;

    const syncPlaybackRate = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0 || !slide?.seconds) return;
      const rate = video.duration / slide.seconds;
      video.playbackRate = Math.min(16, Math.max(0.25, rate));
    };

    syncPlaybackRate();
    video.addEventListener("loadedmetadata", syncPlaybackRate, { once: true });

    const playAttempt = video.play();
    if (playAttempt?.catch) playAttempt.catch(() => {});

    if (video.dataset.fullscreen !== "true") return;

    const requestFullscreen =
      video.requestFullscreen ||
      video.webkitRequestFullscreen ||
      video.msRequestFullscreen;

    if (!requestFullscreen) return;

    const fullscreenAttempt = requestFullscreen.call(video);
    if (fullscreenAttempt?.catch) fullscreenAttempt.catch(() => {});
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
