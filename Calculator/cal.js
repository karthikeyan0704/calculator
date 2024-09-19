let num1 = document.getElementById("num1").getElementsByTagName("input")[0];
let num2 = document.getElementById("num2").getElementsByTagName("input")[0];
let output = document.getElementById("out");
let operator = "";

function Solution(op) {
  operator = op;
}

function Result() {
  let num1Value = parseFloat(num1.value);
  let num2Value = parseFloat(num2.value);
  let result = 0;
  
  switch (operator) {
    case "+":
      result = num1Value + num2Value;
      break;
    case "-":
      result = num1Value - num2Value;
      break;
    case "*":
      result = num1Value * num2Value;
      break;
    case "/":
      result = num1Value / num2Value;
      break;
    default:
      result = "Error";
  }
  
  output.innerHTML = "Output: " + result;
}