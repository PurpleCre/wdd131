const area = document.querySelector("#area");
const lang = document.querySelector("#lang");
const currency = document.querySelector("#currency");
const zone = document.querySelector("#zone");
const code = document.querySelector("#code");
const pop = document.querySelector("#pop");
const tempDoc = document.querySelector("#temp");
const cond = document.querySelector("#cond");
const windDoc = document.querySelector("#wind");
const windChillDoc = document.querySelector("#windc");

let wind = 5;
let temp = 10;
let type = "metric";
let windChill = "";

function calculateWindChill(wind, temp) {
  return Math.ceil(35.74 + (0.6215 * temp))-(35.75 * Math. pow(wind,0.16)) + (0.4275*temp*Math. pow(wind,0.16));
}

function display() {
  if ((type.toLowerCase = "metric")) {
    if (temp <= 10 && wind > 4.8) {
      windChill = calculateWindChill(wind, temp);
    } else {
      windChill = "N/A";
    }
  } else if ((type.toLowerCase = "imperial   ")) {
    if (temp <= 50 && wind > 3) {
      windChill = calculateWindChill(wind, temp);
    } else {
      windChill = "N/A";
    }
  }
}

display();

window.addEventListener("load", () => {
  area.innerHTML = `435 sq metres`;
  lang.innerHTML = `Shona, Ndebele, English `;
  currency.innerHTML = `Zimbabwe Gold (ZiG)`;
  zone.innerHTML = `GMT+2`;
  code.innerHTML = `+263`;
  pop.innerHTML = `7,837,557`;
  tempDoc.innerHTML = `${temp} ⁰C`;
  cond.innerHTML = `Cloudy with a chance of meatballs`;
  windDoc.innerHTML = `${wind} km/h`;
  windChillDoc.innerHTML = `${windChill} ⁰C`;
});
