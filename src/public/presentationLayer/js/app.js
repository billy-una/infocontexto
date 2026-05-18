import { presentationConfig } from "./pages/content.js";
import { PageManager } from "./componentes/PageManager.js";
import { ConfigModal } from "./componentes/ConfigModal.js";

const elements = {
  pageRail: document.getElementById("pageRail"),
  slideMount: document.getElementById("slideMount"),
  pageName: document.getElementById("pageName"),
  pageClock: document.getElementById("pageClock"),
  totalClock: document.getElementById("totalClock"),
  slideLabel: document.getElementById("slideLabel"),
  pageProgress: document.getElementById("pageProgress"),
  slideProgress: document.getElementById("slideProgress"),
  slideWarning: document.getElementById("slideWarning")
};

let manager = new PageManager(presentationConfig, elements);
manager.renderPage();

const configModal = new ConfigModal({
  config: presentationConfig,
  modalElement: document.getElementById("configModal"),
  pagesMount: document.getElementById("configPages"),
  totalInput: document.getElementById("totalMinutes"),
  errorBox: document.getElementById("configError"),
  startButton: document.getElementById("startPresentation"),
  onStart: (nextConfig) => {
    manager.stop();
    manager = new PageManager(nextConfig, elements);
    window.presentationManager = manager;
    manager.start();
  }
});

configModal.open();

window.presentationManager = manager;
