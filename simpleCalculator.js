const resultDisplay = document.getElementById("resultDisplay");
const historyDisplay = document.getElementById("historyDisplay");
const buttons = Array.from(document.getElementsByTagName("button"));

//Change value of one of display
function onDisplay(display , value) {
  display.innerHTML = value;
}

//function to add on each button of calculator
function clickButtonOrPressKey(button, onCLick) {
  let key;
  switch (button.value) {
    case "C":
      // key = ALL NOT TYPICAL FUNCTION
      break;
    default:
      key = button.value;
  }
  button.addEventListener("click", onCLick());
  //button.addEventListener("keydown", (e)=>console.log(e.key));
}

function onClick(button) {
  let displayValue;
  switch (button.value) {
    case "C":
      // key = all not typical buttons
      break;
    default:
      displayValue += button.innerHTML;
      onDisplay(resultDisplay, displayValue); //iner tekst of result
  }
}

buttons.forEach(btn=>btn.onclick(
  let displayValue = resultDisplay.innerHTML
  displayValue += btn.value;
  onDisplay(resultDisplay,displayValue)
)

buttons.forEach(btn=>clickButtonOrPressKey(btn))
//function to run
//if statments for

//button of history operations
//from list operation -> eval value
//^ exchange in eval to Math.pow()
