// 1. If you click on the list item, it toggles the done class on and off.

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function addclasslist(e) {
  let mytry = e.target;
  mytry.classList.toggle("done");
}

var clickli = document.getElementsByTagName("li");
console.log(clickli);

for (const li of clickli) {
  li.addEventListener("click", addclasslist);
}
// var clicklist = document.getElementById("try");
// console.log(clicklist);
// element.onclick() = function addclasslist() {
//   element.classList.toggle("done");
// };

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
