export function checkAnswer(value,operator) {
    var correctAnswer = getCorrectAnswer(operator);
    var userAnswer;
    //var score = parseInt($('#score > output').html());
    userAnswer = value;
    console.log('correctAnswer:' + correctAnswer);
    console.log('user answer:' + userAnswer);
    
    if (value === 'clear') {
      // if (!soundMuted) {
      //   clearSound.play();
      // }
      //$('#solution>output').html('');
    } else if (correctAnswer !== userAnswer) { // If already answered don't change displayed value
      // if (!soundMuted) {
      //   clickSound.play();
      // }
      if (userAnswer === 0) {
        //$('#solution>output').html(value); // don't include leading zeroes
      } else {
        //$('#solution>output').html($('#solution>output').html() + value);
      }
      //userAnswer = parseInt($('#solution>output').html());
    } else {
      return false; // Already got right answer. Don't check it again.
    }
    if (correctAnswer === userAnswer) {
      // if (!soundMuted) {
      //   rightSound.load();
      //   rightSound.play();
      // }
      //setScore(score++);
      //$('#score > output').html(score.toString());
      
    }
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

