const clearBtn = document.querySelector("#clear"),
  display = document.querySelector("#display-text"),
  equalBtn = document.querySelector("#equals");
refresh = document.querySelector("#refresh");

const numBtns = document.querySelectorAll(".number");
const opBtns = document.querySelectorAll(".operators");

let displayedExp,
  finalResult = 0;

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

// just make it so,when you press an op second time it calls operate and stores that in opeand1 too.
opBtns.forEach((item) => opPressed(item));
function opPressed(item) {
  item.addEventListener("click", (item) => {
    if (firstOpDone == true) {
      opChosen = item.target.value;
      let splitExp = currentExp.split(regEx);
      operand1 = +splitExp[0];
      operand2 = +splitExp[1];
      let result = operate(operand1, opChosen, operand2);
      display.textContent = result + opChosen;
      currentExp = result + opChosen;
      console.log(currentExp);
    } else if (firstOpDone == false) {
      opChosen = item.target.value;
      display.textContent += opChosen;
      currentExp
        ? (currentExp += opChosen)
        : console.log("choose an operand first");
      firstOpDone = true;
    }
  });
}

// works for simple operand and operand: for now
equalBtn.addEventListener("click", () => {
  let splitExp = currentExp.split(regEx);
  operand1 = +splitExp[0];
  operand2 = +splitExp[1];
  display.textContent = operate(operand1, opChosen, operand2);
});
