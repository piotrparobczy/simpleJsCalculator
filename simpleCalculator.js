function stoperror() {
  return true;
}
window.onerror = stoperror;
const resultDisplay = document.getElementById("resultDisplay");
const historyDisplay = document.getElementById("historyDisplay");
const buttons = Array.from(document.getElementsByTagName("button"));

//Change value of one of display
function onDisplay(display, value) {
  display.innerHTML = value;
}

console.log(resultDisplay.innerHTML);
buttons.forEach(btn=>console.log(btn.innerHTML);)