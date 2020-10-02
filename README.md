# The OdinProject Calculator

*These are just my thoughts/planning/Todo that I'd been writing in comments untill now*

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
      - done already.


Ok so, it's done now. It turns out I was just messing up the order insinde the conditionals.
This one was pretty fun too, and I tried to keep the JS, as free of this thing people call
"callback hell", where you just nest the living shit out of everything. And It just ends up looking
ugly and hard to read. 

#### Update after a month:
Actually it's not done YET.

One major thing was that when something results in a negaive answer the regex split(/[\/+-*]/) stopped working
as it just splits at the first one, and nothing remains for the first operand.

I fixed it by adding a function to split the expressions, which uses a different regex if the first operand is 
negative and if it is not. This part was actually pretty fun, writing the regex was fun as well, I learned about
capturing groups and the match function. So I used those two things and wrote the regex and it works now.

There were some other things that needed to be fixed like:
1. When someone types a no. after completing an operation and it just adds to the previous result.
2. You can't type negative numbers 
3. When someone presses an operator after pressing another operator
4. Divide by zero error
5. When someone presses an operator without choosing any operands

I've fixed the last three by adding error messages. The first two still remain.






  
        