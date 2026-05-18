export function renderSlide(slide, page) {
  const isLogoMedia = slide.media?.type === "image" && /Logo|Colegio_Ciencias_Economicas/i.test(slide.media.src || "");
  const classes = ["slide"];
  if (!slide.media) classes.push("full");

  return `
    <article class="${classes.join(" ")}">
      <div class="slide-panel">
        <div class="slide-kicker">${escapeHtml(page.title)}</div>
        <h1>${escapeHtml(slide.title)}</h1>
        <h2>${escapeHtml(slide.subtitle || "")}</h2>
        <div class="component-stack">
          ${renderComponents(slide.components || [])}
        </div>
      </div>
      ${slide.media ? renderMedia(slide.media, isLogoMedia) : ""}
    </article>
  `;
}

function renderComponents(components) {
  return components.map((component) => {
    if (component.type === "text") return renderText(component);
    if (component.type === "image" || component.type === "video") return renderMedia(component);
    if (component.type === "metrics") return renderMetrics(component.items || []);
    if (component.type === "rules") return renderRules(component.items || []);
    return "";
  }).join("");
}

function renderText(component) {
  return `<p class="component-text">${escapeHtml(component.text || "")}</p>`;
}

function renderMetrics(items) {
  return `
    <div class="metric-grid">
      ${items.map((item) => `
        <div class="metric-card">
          <strong>${escapeHtml(item.value || "")}</strong>
          <span>${escapeHtml(item.label || "")}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderRules(items) {
  return `
    <div class="rule-list">
      ${items.map((item) => `
        <section class="rule-card ${escapeHtml(item.tone || "")}">
          <div class="rule-card-body">
            <h3>${escapeHtml(item.title || "")}</h3>
            <p>${escapeHtml(item.text || "")}</p>
          </div>
        </section>
      `).join("")}
    </div>
  `;
}

function renderMedia(media, logoFocus = false) {
  const focusClass = logoFocus ? " logo-focus" : "";
  const caption = media.caption ? `<div class="media-caption">${escapeHtml(media.caption)}</div>` : "";

  if (media.type === "video") {
    return `
      <aside class="media-card${focusClass}">
        <video src="${escapeAttribute(media.src)}" controls muted playsinline></video>
        ${caption}
      </aside>
    `;
  }

  if (media.type === "image") {
    return `
      <aside class="media-card${focusClass}">
        <img src="${escapeAttribute(media.src)}" alt="${escapeAttribute(media.caption || "Imagen de apoyo")}">
        ${caption}
      </aside>
    `;
  }

  return `
    <aside class="media-card${focusClass}">
      <div class="media-caption">${escapeHtml(media.caption || "")}</div>
    </aside>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}
