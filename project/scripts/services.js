const sidebar = document.querySelector(".sidebar");
const cards = document.querySelector("#cards");
const header = document.querySelector("#header");

sidebar.addEventListener("click", (event) => {
  header.textContent = event.target.text;
  getCards(services);
});

const services = [
  {
    serviceName: `Data Entry Specialist`,
    serviceType: `Data Entry`,
    price: 20,
    rating: 4,
    description: `11500`,
    imageUrl:
      "https://content.churchofjesuschrist.org/servicesldsorg/bc/services/photo-galleries/aba-nigeria/400x250/aba-nigeria-service-lds-273999-wallpaper.jpg",
  },
  {
    serviceName: `Proof Reader Supreme`,
    serviceType: `Proofreading`,
    price: 20,
    rating: 4,
    description: `11500`,
    imageUrl:
      "https://content.churchofjesuschrist.org/servicesldsorg/bc/services/photo-galleries/aba-nigeria/400x250/aba-nigeria-service-lds-273999-wallpaper.jpg",
  },
  {
    serviceName: `Web Testing Specialist`,
    serviceType: `Web Testing`,
    price: 20,
    rating: 4,
    description: `11500`,
    imageUrl:
      "https://content.churchofjesuschrist.org/servicesldsorg/bc/services/photo-galleries/aba-nigeria/400x250/aba-nigeria-service-lds-273999-wallpaper.jpg",
  },
  {
    serviceName: `Beta Testing Guru`,
    serviceType: `Beta Testing`,
    price: 20,
    rating: 4,
    description: `11500`,
    imageUrl:
      "https://content.churchofjesuschrist.org/servicesldsorg/bc/services/photo-galleries/aba-nigeria/400x250/aba-nigeria-service-lds-273999-wallpaper.jpg",
  },
  {
    serviceName: `Data Entry Specialist`,
    serviceType: `Data Entry`,
    price: 20,
    rating: 4,
    description: `11500`,
    imageUrl:
      "https://content.churchofjesuschrist.org/servicesldsorg/bc/services/photo-galleries/aba-nigeria/400x250/aba-nigeria-service-lds-273999-wallpaper.jpg",
  },
  {
    serviceName: `Proof Reader Supreme`,
    serviceType: `Proofreading`,
    price: 20,
    rating: 4,
    description: `11500`,
    imageUrl:
      "https://content.churchofjesuschrist.org/servicesldsorg/bc/services/photo-galleries/aba-nigeria/400x250/aba-nigeria-service-lds-273999-wallpaper.jpg",
  },
  {
    serviceName: `Beta Testing Guru`,
    serviceType: `Beta Testing`,
    price: 20,
    rating: 4,
    description: `11500`,
    imageUrl:
      "https://content.churchofjesuschrist.org/servicesldsorg/bc/services/photo-galleries/aba-nigeria/400x250/aba-nigeria-service-lds-273999-wallpaper.jpg",
  },
  ,
  {
    serviceName: `Web Testing Specialist`,
    serviceType: `Web Testing`,
    price: 20,
    rating: 4,
    description: `11500`,
    imageUrl:
      "https://content.churchofjesuschrist.org/servicesldsorg/bc/services/photo-galleries/aba-nigeria/400x250/aba-nigeria-service-lds-273999-wallpaper.jpg",
  },
  {
    serviceName: `Beta Testing Guru`,
    serviceType: `Beta Testing`,
    price: 20,
    rating: 4,
    description: `11500`,
    imageUrl:
      "https://content.churchofjesuschrist.org/servicesldsorg/bc/services/photo-galleries/aba-nigeria/400x250/aba-nigeria-service-lds-273999-wallpaper.jpg",
  },
  {
    serviceName: `Data Entry Specialist`,
    serviceType: `Data Entry`,
    price: 20,
    rating: 4,
    description: `11500`,
    imageUrl:
      "https://content.churchofjesuschrist.org/servicesldsorg/bc/services/photo-galleries/aba-nigeria/400x250/aba-nigeria-service-lds-273999-wallpaper.jpg",
  },
];

function createserviceCard(service, img) {
  const card = document.createElement("div");

  const serviceName = document.createElement("h2");
  const serviceType = document.createElement("p");
  const price = document.createElement("p");
  const rating = document.createElement("p");
  const description = document.createElement("p");

  serviceName.textContent = service.serviceName;
  serviceName.style.cssText = `font-size: large; padding: 25px 0;`;
  serviceType.innerHTML = `<span>serviceType:</span> ${service.serviceType}`;
  price.innerHTML = `<span>price:</span> ${service.price}`;
  rating.innerHTML = `<span>rating:</span> ${service.price}`;
  description.innerHTML = `<span>description:</span> ${service.description}`;
  img.setAttribute("src", `${service.imageUrl}`);
  img.setAttribute("alt", `${service.serviceName} service`);

  card.appendChild(serviceName);
  card.appendChild(serviceType);
  card.appendChild(price);
  card.appendChild(description);
  card.appendChild(img);
  card.className = "card";

  cards.appendChild(card);
}

function getCards(services) {
  cards.innerHTML = "";
  let filteredservices = [];

  console.log(header.textContent);
  if (header.textContent !== `All Services`) {
    if (header.textContent === "Data Entry") {
      filteredservices = services.filter(
        (service) => service.serviceType == "Data Entry"
      );
    } else if (header.textContent === "Proofreading") {
      filteredservices = services.filter(
        (service) => service.serviceType == "Proofreading"
      );
    } else if (header.textContent === "Web Testing") {
      filteredservices = services.filter(
        (service) => service.serviceType == "Web Testing"
      );
    } else if (header.textContent === "Beta Testing") {
      filteredservices = services.filter(
        (service) => service.serviceType == "Beta Testing"
      );
    }
  } else {
    filteredservices = services;
  }

  filteredservices.forEach((service) => {
    const image = document.createElement("img");
    if (filteredservices.indexOf(service) > 5) {
      image.setAttribute("loading", "lazy");
      console.log("enter");
    }
    createserviceCard(service, image);
  });
}

getCards(services);
