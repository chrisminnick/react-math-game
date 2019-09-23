import React,{useState} from 'react';
import NumberButton from './NumberButton';
import ClearButton from './ClearButton';
import Timer from './Timer';
import Score from './Score';
import {checkAnswer,getRandNumbers,getCorrectAnswer} from '../helpers/gameplay';
import UserInput from './UserInput';

function Game(props){

    const [input, setInput] = useState('');
    const [score, setScore] = useState(0);
    const [operands, setOperands] = useState({num1:1,num2:1});
    const [correctAnswer, setCorrectAnswer] = useState(getCorrectAnswer(props.operation,operands.num1,operands.num2));



    let displayAnswer = checkAnswer(input,correctAnswer);
    if (displayAnswer==='correct'){
        setInput('');
        //setUserAnswer('');
        setScore(score+1);

        let newRandNums = getRandNumbers(props.operation,0, props.maxNumber)

        setOperands(newRandNums);

        let newCorrectAnswer = getCorrectAnswer(props.operation,newRandNums.num1,newRandNums.num2);
        
        setCorrectAnswer(newCorrectAnswer);

        console.log("operands: " + operands);
    }
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const numberButtons = numbers.map((number) =>
        <NumberButton value={number} prevValue = {input} key={number} handleClick = {setInput}/>
    );
    const gridStyle = {
        width: "300px",
        margin: "0 auto"
    }

    console.log('display answer: ' + displayAnswer);
    return (
    <div>
        <Score score={score}/>
        <Timer />
        <div>
            {operands.num1} {props.operation} {operands.num2} = <UserInput input = {displayAnswer} />
        </div>
        <div style={gridStyle}>
        {numberButtons}
        <ClearButton handleClick = {setInput}/>

        </div>
    </div>
    )
}

export default Game;