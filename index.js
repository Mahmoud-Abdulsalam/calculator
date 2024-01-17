//calculator

const display = document.getElementById("display");
function appendtodisplay(input) {
  display.value += input;
  errorMessage.classList.add("hidden");
}
function clearDisplay() {
  display.value = "";
  errorMessage.classList.add("hidden");
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Erro";
  }
}
function calculate() {
  try {
    const expression = display.value;

    // Check for division by zero 
    if (expression.includes("/0")) {
      display.value = "can't Div by 0";
    } else {
      display.value = eval(expression);
    }
  } catch (error) {
    display.value = "Error";
  }
}
