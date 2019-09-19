import React from 'react';

function UserInput(props){
        var correctAnswer = props.correctAnswer;
        var userAnswer = props.value;
        var input = props.input;
        if (props.value === 'clear') {
          // if (!soundMuted) {
          //   clearSound.play();
          // }
          props.setInput('');
        } else if (correctAnswer !== userAnswer) { // If already answered don't change displayed value
          // if (!soundMuted) {
          //   clickSound.play();
          // }
          if (userAnswer === 0) {
            props.setInput(props.userAnswer); // don't include leading zeroes
          } else {
            props.setInput(String(props.answer)+ String(props.userAnswer));

          }
        } else {
          return false; // Already got right answer. Don't check it again.
        }
        if (correctAnswer === userAnswer) {
          // if (!soundMuted) {
          //   rightSound.load();
          //   rightSound.play();
          // }
          props.setScore(props.score+1);
          
        }
      

    return(
        <>
        {input}
        </>
    );

}

export default UserInput;