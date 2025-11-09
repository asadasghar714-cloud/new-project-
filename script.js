// ========== Mode Toggle Script ==========
const toggle = document.getElementById("mode-toggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
