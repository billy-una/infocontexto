export function renderPageRail(pages, activeIndex) {
  return pages.map((page, index) => `
    <button class="page-tab ${index === activeIndex ? "active" : ""}" type="button" data-page-index="${index}">
      <span class="page-tab-index">${index + 1}</span>
      <span>
        <span class="page-tab-title">${page.title}</span>
        <small>${formatSeconds(page.seconds)}</small>
      </span>
    </button>
  `).join("");
}

function formatSeconds(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}
