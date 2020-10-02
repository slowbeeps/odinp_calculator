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

const operations = {
  "+": function (a, b) {
    let result =  a + b;
    return roundToTwo(result);
  },
  "-": function (a, b) {
    let result =  a - b;
    return roundToTwo(result);
  },
  "*": function (a, b) {
    let result =  a * b;
    return roundToTwo(result);
  },
  "/": function (a, b) {
    let result =  a / b;
    return roundToTwo(result);
  },
  "%": function (a, b) {
    let result =  a % b;
    return roundToTwo(result);
  },
};

function roundToTwo(num) {    
  return +(Math.round(num + "e+2")  + "e-2");
}

function operate(a, operator, b) {
  return operations[operator.toString()](a, b);
}

let regEx = /(\d+)\s*([\-\+\/\*])\s*(\d+)/, negRegEx = /(\-\d+)\s*([\-\+\/*])(\s*\d*)/;
function splitCurrent(currentExp) {
  if ((/^\-/).test(currentExp)) {
    return currentExp.match(negRegEx)
  } else return currentExp.match(regEx)
}

function operateOnCurrent(a, operator, b) {
  let splitExp = splitCurrent(currentExp);
  operand1 = parseInt(splitExp[1]); // here's the problem: it detects -1 and - as the regex split, so Nan.
  operand2 = parseInt(splitExp[3]);
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
