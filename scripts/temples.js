const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

const menuButton = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
        const isHidden = menu.classList.toggle("hidden");
        menuButton.textContent = isHidden ? "☰" : "X";
        menuButton.setAttribute("aria-expanded", String(!isHidden));
        menuButton.setAttribute("aria-label", isHidden ? "Open navigation" : "Close navigation");
    });
}
