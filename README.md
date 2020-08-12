# The OdinProject Calculator

Goal: 2 + 7 - 5 * 3 = 42, That is how it should work, perform operations with two operands at a
time from left to right. There are a bunch of options to do that (probably), 

### Try #1
When user presses an operator after pressing another one, use operate(a,operator, b) where you
can get the operator argument from a variable. Then store the result of operate in display
value and repeat it again. It can go like this:

1. User types the first number
2. Then presses an operator so store the currentExp at this point in operand1.
3. Also store the operator presed in another variable
  When this is pressed turn the operationUnderway to false.
4. Then types the next number/operand.
5. Then user presses another operator this time, the operate function fires up, 
  with the values from operand1 and 2, and operator.
6. To find if the user has already pressed another operator use the operationUnderway 
  boolean and conditionals, like:
  - if operationUnderway == true, fire operate().
  - else store e.target.value in operator.
7. Etore this value in currentExp now.
8. Reset everything - the values for operand1 and 2, operatorChosen and 
  operationUnderway to false.

### Try #2
Most of this is the same as above, just I'll try using regex to split the two operands into an array, then operate on them. then store that in finalResult.

1. User types the number. 
    - Add this to displayExp and currentExp.
2. User presses an operator, change operation underwya to true here. 
    - Add this to displayExp, currentExp (for split), opChosen (for operate) and 
    turn operation underway to true if it is false.
3. Then types another number.
    - Add this to displayExp and currentExp.
4. There are two things that can happen now: 
  1. User presses another operator
    And now, another operator. This is where the actual calculation 
    for the last expression should happen.
      - If operationUnderway is true:
        ```javascript
        let cExpArr = currentExp.split(regEx);
        operand1 = cExpArr[0], operatorChosen /*already done*/, operand2 = cExpArr[1];
        let finalReuslt += (operand1, operatorChosen, operand2);
        ```
      - Reset everything - all the currentExp things.
    - If it is false, then start from number 2.
  2. User presses (=).
      - in this case, I need to display the result for currentExp too.

Wait, for now I'll try this much.

  
        