const clearBtn = document.querySelector("#clear"),
  display = document.querySelector("#display-text"),
  equalBtn = document.querySelector("#equals"),
  refresh = document.querySelector("#refresh"),
  errors = document.querySelector("#errors");

const numBtns = document.querySelectorAll(".number");
const opBtns = document.querySelectorAll(".operators");

let currentExp,
  operand1,
  operand2,
  opChosen,
  firstOpDone = false;

const operations = {
  "+": function (a, b) {
    let result = a + b;
    return roundToTwo(result);
  },
  "-": function (a, b) {
    let result = a - b;
    return roundToTwo(result);
  },
  "*": function (a, b) {
    let result = a * b;
    return roundToTwo(result);
  },
  "/": function (a, b) {
    if (b === 0) {
      currentExp = operand1 = operand2 = opChosen = undefined,
        firstOpDone = false
      errors.textContent = "You can't do that";
      return;
    }
    let result = a / b;
    return roundToTwo(result);
  },
  "%": function (a, b) {
    let result = a % b;
    return roundToTwo(result);
  },
};

function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

function operate(a, operator, b) {
  return operations[operator.toString()](a, b);
}

let regEx = /(\d+)\s*([\-\+\/\*])\s*(\d+)/,
  negRegEx = /(\-\d+)\s*([\-\+\/*])(\s*\d*)/;

function splitCurrent(currentExp) {
  if ((/^\-/).test(currentExp)) {
    return currentExp.match(negRegEx)
  } else return currentExp.match(regEx)
}

function operateOnCurrent(a, operator, b) {
  let splitExp = splitCurrent(currentExp);
  operand1 = parseInt(splitExp[1]);
  operand2 = parseInt(splitExp[3]);
  let result = operate(operand1, opChosen, operand2);
  return result;
}

refresh.addEventListener("click", () => {
  window.location.reload();
});

/* 
Don't let them add numbers to another result
when they've done an operation and try to click on another number, it should
erase the result you already have on the first click and then add the succeeding clicks
to this result.

How to detect if they've done an operation?
firstOpdone == true

*/

// numbers
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

/* make sure they can't press two ops conscutively */
function firstOpPressed(item) {
  if (operand2 == undefined) errors.textContent = "Choose another operand first"
  let result = operateOnCurrent(operand1, opChosen, operand2);
  display.textContent = result + item.target.value;
  errors.textContent = "";
  opChosen = item.target.value;
  currentExp = result + item.target.value;
}

function pressingFirstOp(item) {
  opChosen = item.target.value;
  display.textContent += item.target.value;
  currentExp
    ?
    (currentExp += opChosen) :
    errors.textContent = "Press C then choose an operand first";
  firstOpDone = true;
}

// clear and equals
clearBtn.addEventListener("click", () => {
  (currentExp = operand1 = operand2 = opChosen = undefined),
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
})