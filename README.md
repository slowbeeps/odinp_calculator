# The OdinProject Calculator

Goal: 2 + 7 - 5 * 3 = 42, That is how it should work, perform operations with two operands at a
time from left to right. There are a bunch of options to do that (probably), 

### Try #1
When user presses an operator after pressing another one, use operate(a,operator, b) where you
can get the operator argument from a variable. Then store the result of operate in display
value and repeat it again. It can go like this:

1. [ ] User types the first number
2. [ ] Then presses an operator so store the currentExp at this point in operand1.
3. [ ] Also store the operator presed in another variable
  When this is pressed turn the operationUnderway to false.
4. [ ]Then types the next number/operand.
5. [ ] Then user presses another operator this time, the operate function fires up, 
  with the values from operand1 and 2, and operator.
6. [ ] To find if the user has already pressed another operator use the operationUnderway 
  boolean and conditionals, like:
    - if operationUnderway == true, fire operate().
    - else store e.target.value in operator.
7. [ ] store this value in currentExp now.
8. [ ] reset everything - the values for operand1 and 2, operatorChosen and 
  operationUnderway to false.