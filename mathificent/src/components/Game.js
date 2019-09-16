import React from 'react';
import { Link } from 'react-router-dom';
import NumberButton from './NumberButton';
import ClearButton from './ClearButton';
import Timer from './Timer';
import Score from './Score';

function Game(){
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const numberButtons = numbers.map((number) =>
        <NumberButton value={number} />
    );

    return (
    <div>
        <Score />
        <Timer /><br />
        {numberButtons}
        <ClearButton /><br /><br />

        <Link className="btn btn-success" to="/">Change Game</Link>
    </div>
    )
}

export default Game;