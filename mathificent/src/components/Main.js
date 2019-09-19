import React from 'react';
import SelectInput from './SelectInput';
import ScoreOutputBox from './ScoreOutputBox';
import PlayButton from './PlayButton';

function Main(props){
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
            <SelectInput currentValue = {props.operation} 
                         setCurrentValue = {props.setOperation}
                         label = "Operation" 
                         values = {operations} />

            <SelectInput currentValue = {props.maxNumber}
                         setCurrentValue = {props.setMaxNumber}
                         label = "Maximum Number" 
                         values = {numbers} />
                         
            <ScoreOutputBox />
            <PlayButton
                operation={props.operation}
                maxNumber={props.maxNumber} />
        </div>
    )
}
export default Main;