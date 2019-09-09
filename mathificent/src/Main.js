import React from 'react';
import SelectInput from './SelectInput';
import ScoreOutputBox from './ScoreOutputBox';
import PlayButton from './PlayButton';

function Main(){
    return(
        <div>
            <SelectInput />
            <SelectInput />
            <ScoreOutputBox />
            <PlayButton />
        </div>
    )
}
export default Main;