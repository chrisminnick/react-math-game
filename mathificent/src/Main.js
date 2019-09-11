import React from 'react';
import SelectInput from './SelectInput';
import ScoreOutputBox from './ScoreOutputBox';
import PlayButton from './PlayButton';

function Main(){
    const operations = ["Addition",
                      "Multiplication",
                      "Division",
                      "Subtraction"];
    let numbers = [];
    for (let number = 0;number<=100;number++){
        numbers.push(number);
    }
    return(
        <div>
            <SelectInput label = "Operation" values = {operations} />
            <SelectInput label = "Maximum Number" values = {numbers} />
            <ScoreOutputBox />
            <PlayButton />
        </div>
    )
}
export default Main;