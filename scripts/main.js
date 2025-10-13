// Muestra el año actual en el pie de página sin depender del servidor.
document.addEventListener("DOMContentLoaded", () => {
  const yearTag = document.getElementById("year");
  if (yearTag) {
    yearTag.textContent = new Date().getFullYear();
  }
});
