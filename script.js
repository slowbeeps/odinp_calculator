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

const displayValNodes = document.querySelectorAll(".displayValue");

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

const operate = (a, operator, b) => {
  return operations[operator.toString()](a, b);
};

function addValue(item) {
  item.addEventListener("click", (item) => {
    display.textContent += item.target.value;
    console.log(item.target.value);
  });
}

displayValNodes.forEach((item) => addValue(item));
