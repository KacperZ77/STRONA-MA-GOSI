// MENU MOBILNE
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".main-nav");
const menuLinks = document.querySelectorAll(".main-nav a");

if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}
