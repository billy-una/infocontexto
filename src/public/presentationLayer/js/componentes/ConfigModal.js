export class ConfigModal {
  constructor({ config, modalElement, pagesMount, totalInput, errorBox, startButton, onStart }) {
    this.config = structuredClone(config);
    this.modalElement = modalElement;
    this.pagesMount = pagesMount;
    this.totalInput = totalInput;
    this.errorBox = errorBox;
    this.startButton = startButton;
    this.onStart = onStart;
    this.modal = new bootstrap.Modal(modalElement);

    this.render();
    this.bind();
    this.validate();
  }

  open() {
    this.modal.show();
  }

  render() {
    this.totalInput.value = secondsToMinutes(this.config.totalSeconds);
    this.pagesMount.innerHTML = this.config.pages.map((page, pageIndex) => `
      <section class="config-page" data-page="${pageIndex}">
        <div class="config-page-head">
          <div>
            <h2 class="config-page-title">${escapeHtml(page.title)}</h2>
            <div class="config-page-subtitle">${page.slides.length} slides internos</div>
          </div>
          <div>
            <label class="form-label" for="page-${pageIndex}-seconds">Tiempo página</label>
            <div class="input-group input-group-sm">
              <input id="page-${pageIndex}-seconds" class="form-control page-seconds" type="number" min="1" step="1" value="${page.seconds}">
              <span class="input-group-text">seg</span>
            </div>
          </div>
        </div>
        <div class="config-slide-grid">
          ${page.slides.map((slide, slideIndex) => `
            <div class="config-slide-item" data-slide="${slideIndex}">
              <label class="form-label" for="page-${pageIndex}-slide-${slideIndex}">
                Slide ${slideIndex + 1}
              </label>
              <span class="config-slide-title">${escapeHtml(slide.title)}</span>
              <div class="input-group input-group-sm">
                <input id="page-${pageIndex}-slide-${slideIndex}" class="form-control slide-seconds" type="number" min="1" step="1" value="${slide.seconds}">
                <span class="input-group-text">seg</span>
              </div>
            </div>
          `).join("")}
        </div>
        <div class="config-checkline" data-checkline></div>
      </section>
    `).join("");
  }

  bind() {
    this.totalInput.addEventListener("input", () => this.validate());
    this.pagesMount.addEventListener("input", (event) => {
      if (!event.target.matches("input")) return;
      this.validate();
    });

    this.startButton.addEventListener("click", () => {
      const result = this.validate();
      if (!result.ok) return;
      this.modal.hide();
      requestPresentationFullscreen();
      this.onStart(result.config);
    });
  }

  validate() {
    const nextConfig = structuredClone(this.config);
    nextConfig.totalSeconds = minutesToSeconds(Number(this.totalInput.value));

    const errors = [];
    const pageSections = [...this.pagesMount.querySelectorAll("[data-page]")];
    let pagesTotal = 0;

    pageSections.forEach((section) => {
      const pageIndex = Number(section.dataset.page);
      const page = nextConfig.pages[pageIndex];
      const pageSeconds = positiveInteger(section.querySelector(".page-seconds").value);
      const slideInputs = [...section.querySelectorAll(".slide-seconds")];
      let slideTotal = 0;

      page.seconds = pageSeconds;
      pagesTotal += pageSeconds;

      slideInputs.forEach((input, slideIndex) => {
        const seconds = positiveInteger(input.value);
        page.slides[slideIndex].seconds = seconds;
        slideTotal += seconds;
      });

      const checkline = section.querySelector("[data-checkline]");
      const valid = slideTotal <= pageSeconds;
      checkline.classList.toggle("valid", valid);
      checkline.classList.toggle("invalid", !valid);
      checkline.textContent = valid
        ? `Slides: ${slideTotal}s de ${pageSeconds}s disponibles.`
        : `Slides: ${slideTotal}s sobrepasan los ${pageSeconds}s de la página.`;

      if (!valid) {
        errors.push(`${page.title}: la suma de slides (${slideTotal}s) supera el tiempo de página (${pageSeconds}s).`);
      }
    });

    if (pagesTotal !== nextConfig.totalSeconds) {
      errors.push(`La suma de páginas es ${pagesTotal}s y el total configurado es ${nextConfig.totalSeconds}s.`);
    }

    if (nextConfig.totalSeconds <= 0) {
      errors.push("El tiempo total debe ser mayor a cero.");
    }

    if (errors.length > 0) {
      this.errorBox.classList.remove("d-none");
      this.errorBox.innerHTML = errors.map((error) => `<div>${escapeHtml(error)}</div>`).join("");
      this.startButton.disabled = true;
      return { ok: false, config: nextConfig };
    }

    this.errorBox.classList.add("d-none");
    this.errorBox.innerHTML = "";
    this.startButton.disabled = false;
    return { ok: true, config: nextConfig };
  }
}

function requestPresentationFullscreen() {
  const target = document.documentElement;
  const requestFullscreen =
    target.requestFullscreen ||
    target.webkitRequestFullscreen ||
    target.msRequestFullscreen;

  if (!requestFullscreen || document.fullscreenElement) return;

  const fullscreenAttempt = requestFullscreen.call(target);
  if (fullscreenAttempt?.catch) fullscreenAttempt.catch(() => {});
}

function positiveInteger(value) {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function minutesToSeconds(value) {
  return Number.isFinite(value) && value > 0 ? Math.round(value * 60) : 0;
}

function secondsToMinutes(seconds) {
  return Math.round(seconds / 60);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
