// Mobile nav toggle + footer year
const toggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        toggleBtn.setAttribute("aria-expanded", String(isOpen));
    });
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();