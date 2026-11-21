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
        menuButton.setAttribute(
            "aria-label",
            isHidden ? "Open navigation" : "Close navigation"
        );
    });
}

const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },

        {
            templeName: "St. George Utah",
            location: "St. George, Utah, United States",
            dedicated: "1877, April, 6",
            area: 143969,
            imageUrl: "ST_GEORGE_IMAGE_URL"
        },
        {
            templeName: "Logan Utah",
            location: "Logan, Utah, United States",
            dedicated: "1884, May, 17",
            area: 119619,
            imageUrl: "LOGAN_IMAGE_URL"
        },
        {
            templeName: "Provo City Center",
            location: "Provo, Utah, United States",
            dedicated: "2016, March, 20",
            area: 85084,
            imageUrl: "PROVO_IMAGE_URL"
        },
        {
            templeName: "St. George Utah",
            location: "St. George, Utah, United States",
            dedicated: "1877, April, 6",
            area: 143969,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-utah-temple-exterior-1075606-wallpaper.jpg"
        },
];
const cardContainer = document.querySelector("#temple-cards");
const pageHeading = document.querySelector("main h1");

function displayTemples(templeList) {
    cardContainer.replaceChildren();

    templeList.forEach((temple) => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        card.append(name, location, dedicated, area, image);
        cardContainer.appendChild(card);
    });
}

displayTemples(temples);

document.querySelectorAll("#menu a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const filter = link.dataset.filter;
        let filteredTemples = temples;

        if (filter === "old") {
            filteredTemples = temples.filter(
                (temple) => Number(temple.dedicated.slice(0, 4)) < 1900
            );
        } else if (filter === "new") {
            filteredTemples = temples.filter(
                (temple) => Number(temple.dedicated.slice(0, 4)) > 2000
            );
        } else if (filter === "large") {
            filteredTemples = temples.filter((temple) => temple.area > 90000);
        } else if (filter === "small") {
            filteredTemples = temples.filter((temple) => temple.area < 10000);
        }

        pageHeading.textContent = link.textContent;
        displayTemples(filteredTemples);
    });
});

}
