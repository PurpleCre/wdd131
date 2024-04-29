const currYear = document.querySelector("#currentyear");
const lastMod = document.querySelector("#lastmodified");

const date = new Date();

currYear.innerHTML = date.getFullYear();
lastMod.innerHTML = `Last modified: ${document.lastModified}`;
