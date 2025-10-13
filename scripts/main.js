// Muestra el año actual en el pie de página y maneja el modo día/noche.
document.addEventListener("DOMContentLoaded", () => {
  const yearTag = document.getElementById("year");
  if (yearTag) {
    yearTag.textContent = new Date().getFullYear();
  }

  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) {
    return;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const storedTheme = localStorage.getItem("theme");
  let userSetTheme = Boolean(storedTheme);

  const updateToggleLabel = (mode) => {
    const label =
      mode === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro";
    themeToggle.setAttribute("aria-label", label);
  };

  const applyTheme = (mode) => {
    if (mode === "dark") {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
    updateToggleLabel(mode);
  };

  const initialTheme =
    storedTheme || (prefersDark.matches ? "dark" : "light");
  applyTheme(initialTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme =
      document.body.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    userSetTheme = true;
  });

  prefersDark.addEventListener("change", (event) => {
    if (userSetTheme) {
      return;
    }
    applyTheme(event.matches ? "dark" : "light");
  });
});
