const count = document.querySelector("span");
console.log(count);

let reviews = Number(window.localStorage.getItem("reviewNumber")) || 0;

if (reviews !== 0) {
  count.textContent = reviews + 1;
} else {
  count.textContent = "1st review!";
}

reviews++;

localStorage.setItem("reviewNumber", reviews);
