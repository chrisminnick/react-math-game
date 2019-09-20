import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import NumberButton from './NumberButton';
import ClearButton from './ClearButton';
import Timer from './Timer';
import Score from './Score';
import {checkAnswer} from '../helpers/gameplay';
import UserInput from './UserInput';

function Game(props){

    const [input, setInput] = useState('');
    const [score, setScore] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState(26);
    
    let displayAnswer = String(userInput) + checkAnswer(input,correctAnswer,userInput);

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
        <Link className="btn btn-success" to="/">Change Game</Link>

        <Score />
        <Timer />
        <div>
            1+1 = <UserInput input = {displayAnswer} />
        </div>
        <div style={gridStyle}>
        {numberButtons}
        <ClearButton handleClick = {setInput}/>

        </div>

    </div>
    )
}

export default Game;