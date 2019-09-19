import React from 'react';

function UserInput(props){
        var correctAnswer = props.correctAnswer;
        var userAnswer = props.value;
        console.log('user answer:' + userAnswer);
        var input = props.input;
        console.log('input: ' + input);
        console.log('correct answer: ' + correctAnswer);

        if (userAnswer === 'clear') {
          props.setInput('');
        }
        
        if (correctAnswer !== userAnswer) { // If already answered don't change displayed value

          if (userAnswer === 0) {
            props.setInput(input); // don't include leading zeroes
          } else {
            //props.setInput(String(userAnswer)+ String(input));
            
            input = String(userAnswer)+ String(input);
            console.log('ending input: ' + input);

          }

        } else {
          return false; // Already got right answer. Don't check it again.
        }
        if (correctAnswer === Number(input)) {

          //props.setScore(props.score+1);
          input = '';
          
        }

    return(
        <>
        {input}
        </>
    );

}

export default UserInput;