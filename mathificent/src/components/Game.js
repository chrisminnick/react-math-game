import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import NumberButton from './NumberButton';
import ClearButton from './ClearButton';
import Timer from './Timer';
import Score from './Score';
import {checkAnswer} from '../helpers/gameplay';

function Game(props){

    const [input, setInput] = useState(0);

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const numberButtons = numbers.map((number) =>
        <NumberButton value={number} key={number} handleClick = {setInput}/>
    );
    const gridStyle = {
        width: "300px",
        margin: "0 auto"
    }

    return (
    <div>
        <Link className="btn btn-success" to="/">Change Game</Link>

        <Score />
        <Timer />
        <div>
            1+1 = <input type="text" value={input} onChange={(props)=>{checkAnswer(props.value,props.operator)}} />
        </div>
        <div style={gridStyle}>
        {numberButtons}
        <ClearButton />

        </div>

    </div>
    )
}

export default Game;