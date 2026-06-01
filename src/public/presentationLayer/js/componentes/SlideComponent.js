export function renderSlide(slide, page) {
  const isLogoMedia = slide.media?.type === "image" && /Logo|Colegio_Ciencias_Economicas/i.test(slide.media.src || "");
  const classes = ["slide"];
  if (!slide.media) classes.push("full");
  if (slide.media?.type === "video") classes.push("video-slide");
  if ((slide.components || []).some((component) => component.type === "story")) classes.push("story-slide");

  return `
    <article class="${classes.join(" ")}">
      <div class="slide-panel">
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
    if (component.type === "story") return renderStory(component);
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

function renderStory(component) {
  return `
    <div class="story-layout ${escapeHtml(component.variant || "")}">
      <section class="story-copy">
        <p class="story-lead">${escapeHtml(component.lead || "")}</p>
        <div class="story-list">
          ${(component.items || []).map((item) => `
            <article class="story-item">
              <div class="story-icon" aria-hidden="true">${escapeHtml(item.icon || "")}</div>
              <div>
                <h3>${escapeHtml(item.title || "")}</h3>
                <p>${escapeHtml(item.text || "")}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="story-visual">
        <div class="visual-frame">
          ${renderStoryVisual(component.visual || {})}
        </div>
        ${component.note ? `
          <div class="story-note">
            <div class="story-note-icon" aria-hidden="true">${escapeHtml(component.note.icon || "")}</div>
            <p>${escapeHtml(component.note.text || "")}</p>
          </div>
        ` : ""}
        ${(component.badges || []).length ? `
          <div class="story-badges">
            ${component.badges.map((badge) => `
              <span><strong aria-hidden="true">${escapeHtml(badge.icon || "")}</strong>${escapeHtml(badge.text || "")}</span>
            `).join("")}
          </div>
        ` : ""}
      </section>
    </div>
  `;
}

function renderStoryVisual(visual) {
  if (visual.type === "image") {
    return `<img src="${escapeAttribute(visual.src || "")}" alt="${escapeAttribute(visual.alt || "Imagen de apoyo")}">`;
  }

  return `
    <div class="story-illustration ${escapeHtml(visual.kind || "")}">
      <div class="illustration-paper-stack" aria-hidden="true"></div>
      <div class="illustration-screen" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="illustration-person" aria-hidden="true"></div>
      <div class="illustration-cloud" aria-hidden="true"></div>
    </div>
  `;
}

function renderMedia(media, logoFocus = false) {
  const focusClass = logoFocus ? " logo-focus" : "";
  const caption = media.caption ? `<div class="media-caption">${escapeHtml(media.caption)}</div>` : "";

  if (media.type === "video") {
    const fullscreen = media.fullscreen ? "true" : "false";
    const poster = media.poster ? ` poster="${escapeAttribute(media.poster)}"` : "";

    return `
      <aside class="media-card${focusClass}">
        <video
          src="${escapeAttribute(media.src)}"
          controls
          autoplay
          muted
          playsinline
          preload="auto"
          data-autoplay-video
          data-fullscreen="${fullscreen}"${poster}
        ></video>
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
