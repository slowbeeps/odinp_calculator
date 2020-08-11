const clear = document.querySelector("#clear"),
  display = document.querySelector("#display-text");

const seven = document.querySelector("#seven"),
  eight = document.querySelector("#eight"),
  nine = document.querySelector("#nine"),
  four = document.querySelector("#four"),
  five = document.querySelector("#five"),
  six = document.querySelector("#six"),
  one = document.querySelector("#one"),
  two = document.querySelector("#two"),
  three = document.querySelector("#three"),
  add = document.querySelector("#add"),
  zero = document.querySelector("#zero");

const multiply = document.querySelector("#multiply"),
  subtract = document.querySelector("#subtract"),
  modulo = document.querySelector("#modulo"),
  divide = document.querySelector("#divide"),
  decimal = document.querySelector("#decimal"),
  equals = document.querySelector("#equals");

const numbersNodes = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operators");

let currentExp;
let operand1;
let operand2;
let operatorChosen;
let operationUnderway = false;

const operations = {
  "+": function (a, b) {
    return a + b;
  },
  "-": function (a, b) {
    return a - b;
  },
  "*": function (a, b) {
    return a * b;
  },
  "/": function (a, b) {
    return a / b;
  },
};

function operate(a, operator, b) {
  a = parseInt(a);
  b = parseInt(b);
  return operations[operator.toString()](a, b);
}

function numPressed(item) {
  item.addEventListener("click", (item) => {
    display.textContent += item.target.value;
    currentExp == undefined
      ? (currentExp = item.target.value)
      : (currentExp += item.target.value);
    currentExp = parseInt(currentExp);
    console.log(currentExp);
  });
}
numbersNodes.forEach((item) => numPressed(item));

function clearValues() {
  display.textContent = "";
  currentExp = null;
}
clear.addEventListener("click", clearValues);

/* 
1
*/
