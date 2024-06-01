const ham = document.querySelector("#menu");
const body = document.body;
const pics = document.querySelector(".pics");
const nav = document.querySelector("nav");
const header = document.querySelector("#header");

ham.addEventListener("click", () => {
  body.classList.toggle("show");
});

nav.addEventListener("click", (event) => {
  header.textContent = event.target.text;
  getCards(temples);
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Indianapolis Indiana",
    location: "Carmel, Indiana, United States",
    dedicated: "2015, August, 23",
    area: 34000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/indianapolis-indiana/2018/400x250/Indianapolis-Indiana-Temple04.jpg",
  },
  {
    templeName: "Sao Paulo Brazil",
    location: "São Paulo, Sao Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg",
  },
  {
    templeName: "Sapporo Japan",
    location: "Atsubetsu-ku Sapporo, Hokkaido, Japan",
    dedicated: "2016, August, 21",
    area: 48480,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-night-1945721.jpg",
  },
  {
    templeName: "Adelaide Australia",
    location: "Marden, South Australia, Australia",
    dedicated: "2000, June, 15",
    area: 10700,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x225/adelaide-australia-temple-lds-866420-wallpaper.jpg",
  },
  {
    templeName: "Concepciόn Chile",
    location: "Concepcion, Chile",
    dedicated: "2018, October, 28",
    area: 23095,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/concepcion-chile/2018/400x250/01-Concepcion-Chile-Temple-2113673.jpg",
  },
];

function createTempleCard(temple, img) {
  const card = document.createElement("div");

  const templeName = document.createElement("h2");
  const location = document.createElement("p");
  const dedicated = document.createElement("p");
  const area = document.createElement("p");

  templeName.textContent = temple.templeName;
  templeName.style.cssText = `font-size: large; padding: 25px 0;`;
  location.innerHTML = `<span>Location:</span> ${temple.location}`;
  dedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;
  area.innerHTML = `<span>Area:</span> ${temple.area}`;
  img.setAttribute("src", `${temple.imageUrl}`);
  img.setAttribute("alt", `${temple.templeName} Temple`);

  card.appendChild(templeName);
  card.appendChild(location);
  card.appendChild(dedicated);
  card.appendChild(area);
  card.appendChild(img);
  card.className = "card";

  pics.appendChild(card);
}

function getCards(temples) {
  pics.innerHTML = "";
  let filteredTemples = [];

  function getYear(temple) {
    let year = temple.dedicated.split(",", 1);
    return year;
  }

  if (header.textContent !== "Home") {
    if (header.textContent === "Old") {
      filteredTemples = temples.filter((temple) => getYear(temple) < 1900);
    } else if (header.textContent === "New") {
      filteredTemples = temples.filter((temple) => getYear(temple) >= 200);
    } else if (header.textContent === "Large") {
      filteredTemples = temples.filter((temple) => temple.area > 90000);
    } else if (header.textContent === "Small") {
      filteredTemples = temples.filter((temple) => temple.area < 10000);
    }
  } else {
    filteredTemples = temples;
  }

  filteredTemples.forEach((temple) => {
    const image = document.createElement("img");
    if (filteredTemples.indexOf(temple) > 5) {
      image.setAttribute('loading', 'lazy');
      console.log("enter")
    }
    createTempleCard(temple, image);
  });
}

getCards(temples);
