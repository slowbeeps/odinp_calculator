const clearBtn = document.querySelector("#clear"),
  display = document.querySelector("#display-text"),
  equalBtn = document.querySelector("#equals"),
  refresh = document.querySelector("#refresh");

const numBtns = document.querySelectorAll(".number");
const opBtns = document.querySelectorAll(".operators");

let currentExp,
  operand1,
  operand2,
  opChosen,
  firstOpDone = false;

let regEx = /\+|\-|\/|\*/g;

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
  "%": function (a, b) {
    return a % b;
  },
};

function operate(a, operator, b) {
  return operations[operator.toString()](a, b);
}

function operateOnCurrent(a, operator, b) {
  let splitExp = currentExp.split(regEx);
  operand1 = +splitExp[0];
  operand2 = +splitExp[1];
  let result = operate(operand1, opChosen, operand2);
  return result;
}

refresh.addEventListener("click", () => {
  window.location.reload();
});

numBtns.forEach((item) => numPressed(item));
function numPressed(item) {
  item.addEventListener("click", (item) => {
    let numVal = item.target.value;
    display.textContent += numVal;
    currentExp ? (currentExp += numVal) : (currentExp = numVal);
  });
}

// operators and their functions
opBtns.forEach((item) => opPressed(item));

function opPressed(item) {
  item.addEventListener("click", (item) => {
    if (firstOpDone == true) firstOpPressed(item);
    else if (firstOpDone == false) pressingFirstOp(item);
  });
}

function firstOpPressed(item) {
  let result = operateOnCurrent(operand1, opChosen, operand2);
  display.textContent = result + item.target.value;
  opChosen = item.target.value;
  currentExp = result + item.target.value;
}

function pressingFirstOp(item) {
  opChosen = item.target.value;
  display.textContent += item.target.value;
  currentExp
    ? (currentExp += opChosen)
    : console.log("choose an operand first");
  firstOpDone = true;
}

// clear and equals
clearBtn.addEventListener("click", () => {
  (currentExp = undefined),
    (operand1 = undefined),
    (operand2 = undefined),
    (opChosen = undefined),
    (firstOpDone = false),
    (display.textContent = "");
});

equalBtn.addEventListener("click", () => {
  if (firstOpDone == true) {
    let result = operateOnCurrent(operand1, opChosen, operand2);
    display.textContent = result;
  } else if (firstOpDone == false) {
    display.textContent = operateOnCurrent(operand1, opChosen, operand2);
  }
});
