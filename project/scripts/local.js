const userName = document.querySelector("#name");
const btn = document.querySelector("#button");

btn.addEventListener("click", () => {
    localStorage.clear();
    localStorage.setItem(`name`, `${userName.value}`);
    console.log(userName.value);
});
