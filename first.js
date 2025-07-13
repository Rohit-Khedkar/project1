const navToggle = document.getElementById("navToggle");
const navUl = document.querySelector("nav ul");
navToggle.addEventListener("click", () => navUl.classList.toggle("show"));

// Close nav on link click (mobile)
navUl.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navUl.classList.remove("show"));
});

// ——— Smooth Scroll for Anchor Links ———
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 60, behavior: "smooth" });
  });
});

// ——— Contact Form (simple front‑end validation) ———
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  // Fake success feedback
  msg.hidden = false;
  form.reset();
});