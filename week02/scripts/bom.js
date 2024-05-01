const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

input.focus();

button.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    li.textContent = input.value;
    delbtn.textContent = "❌";
    li.append(delbtn);
    list.append(li);

    delbtn.addEventListener("click", () => {
      list.removeChild(li);
      input.focus();
    });

    input.value = "";
  } else {
    alert("Input empty");
    input.focus();
  }
});
