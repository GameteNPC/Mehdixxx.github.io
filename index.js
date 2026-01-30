// --- Smooth scroll amélioré ---
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// --- Animation d’apparition des sections ---
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});

// --- Menu burger responsive ---
const burger = document.createElement("div");
burger.classList.add("burger");
burger.innerHTML = "☰";
document.querySelector("nav").appendChild(burger);

burger.addEventListener("click", () => {
    document.querySelector("nav ul").classList.toggle("open");
});

// --- Effet dynamique sur les cartes compétences ---
document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
    });
});

