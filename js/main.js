const projectCards = document.querySelectorAll(".project-card");
const avatar = document.querySelector(".avatar-img");

if (avatar) {
  avatar.addEventListener("error", () => {
    avatar.style.display = "none";
  });
}

projectCards.forEach((card) => {
  const button = card.querySelector(".project-toggle");

  button.addEventListener("click", () => {
    const isOpen = card.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
