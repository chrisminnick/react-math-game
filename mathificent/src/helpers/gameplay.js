export function checkAnswer(input,correctAnswer,userAnswer) {
 
  console.log('user answer:' + userAnswer);
  console.log('input: ' + input);
  console.log('correct answer: ' + correctAnswer);

  if (userAnswer === 'clear') {
    input = '';
    return input;
  }
  
  if (correctAnswer !== userAnswer) { // If already answered don't change displayed value

    if (userAnswer === 0) {
      return input; // don't include leading zeroes
    } else {
      //props.setInput(String(userAnswer)+ String(input));
      
      input = String(userAnswer)+ String(input);
      console.log('ending input: ' + input);
      return input;
    }

  } else {
    return false; // Already got right answer. Don't check it again.
  }
  if (correctAnswer === Number(input)) {

    input = '';
    return input;
    
  }
  
function getCorrectAnswer(oper) {
    var num1 = 2;
    var num2 = 2;
    switch(oper) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case 'x':
        return num1 * num2;
      case '/':
        return num1 / num2;
    }
  }
}
