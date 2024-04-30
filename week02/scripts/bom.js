const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement("li");
const delbtn = document.createElement("button");

li.textContent = input.value;
delbtn.textContent = "❌";
li.append(delbtn);
list.append(li);