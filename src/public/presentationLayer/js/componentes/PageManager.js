import { renderPageRail } from "./PageRail.js";
import { SlideManager } from "./SlideManager.js";

export class PageManager {
  constructor(config, elements) {
    this.config = config;
    this.elements = elements;
    this.pageIndex = 0;
    this.pageElapsed = 0;
    this.totalElapsed = 0;
    this.lastTick = null;
    this.rafId = null;
    this.slideManager = new SlideManager({
      mount: elements.slideMount,
      label: elements.slideLabel,
      progress: elements.slideProgress,
      warning: elements.slideWarning,
      warningSeconds: config.slideWarningSeconds,
      onSlideEnd: () => this.handleSlideEnd()
    });
  }

  start() {
    this.stop();
    this.pageIndex = 0;
    this.pageElapsed = 0;
    this.totalElapsed = 0;
    this.renderPage();
    this.lastTick = performance.now();
    this.rafId = requestAnimationFrame((time) => this.loop(time));
  }

  stop() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  goToPage(index) {
    this.pageIndex = Math.max(0, Math.min(index, this.config.pages.length - 1));
    this.pageElapsed = 0;
    this.renderPage();
  }

  handleSlideEnd() {
    if (this.slideManager.hasNextSlide()) {
      this.slideManager.nextSlide();
      return;
    }
  }

  nextPage() {
    if (this.pageIndex < this.config.pages.length - 1) {
      this.goToPage(this.pageIndex + 1);
      return;
    }

    this.goToPage(0);
    this.totalElapsed = 0;
  }

  renderPage() {
    const page = this.currentPage();
    this.elements.pageRail.innerHTML = renderPageRail(this.config.pages, this.pageIndex);
    this.elements.pageName.textContent = page.title;
    this.slideManager.loadPage(page);
    this.bindRail();
    this.updateUi();
  }

  bindRail() {
    this.elements.pageRail.querySelectorAll("[data-page-index]").forEach((button) => {
      button.addEventListener("click", () => {
        this.goToPage(Number(button.dataset.pageIndex));
      });
    });
  }

  loop(time) {
    const deltaSeconds = Math.min(0.25, (time - this.lastTick) / 1000);
    this.lastTick = time;
    this.pageElapsed += deltaSeconds;
    this.totalElapsed += deltaSeconds;

    const page = this.currentPage();
    if (this.pageElapsed >= page.seconds) {
      this.nextPage();
    } else {
      this.slideManager.tick(deltaSeconds);
      this.updateUi();
    }

    this.rafId = requestAnimationFrame((nextTime) => this.loop(nextTime));
  }

  updateUi() {
    const page = this.currentPage();
    const pageRatio = Math.min(100, (this.pageElapsed / page.seconds) * 100);
    const pageRemaining = Math.ceil(page.seconds - this.pageElapsed);
    const total = this.config.totalSeconds;

    this.elements.pageProgress.style.width = `${pageRatio}%`;
    this.elements.pageClock.textContent = formatClock(pageRemaining);
    this.elements.totalClock.textContent = `${formatClock(Math.floor(this.totalElapsed))} / ${formatClock(total)}`;
  }

  currentPage() {
    return this.config.pages[this.pageIndex];
  }
}

function formatClock(totalSeconds) {
  const safe = Math.max(0, totalSeconds);
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
