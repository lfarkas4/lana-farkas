// src/utils/ga.js
export const GA_ID = "G-MMV7J0WD88";

export function gaEvent(name, params = {}) {
  if (!window.gtag) return;
  window.gtag("event", name, params);
}

export function gaPageview(path) {
  if (!window.gtag) return;
  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: path,
    page_title: document.title,
  });
}
