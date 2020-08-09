const operations = {
 "+" :function (a, b) {return a + b;},
 "-" :function (a, b) {return a - b;},
 "*":function (a, b) {return a * b;},
 "/" :function (a, b) {return a / b;},
}

const operate = (a, operator, b) => {
  return operations[operator.toString()](a, b);
}

console.log(operate(2 * 4));





