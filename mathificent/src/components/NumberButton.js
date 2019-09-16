import React from 'react';
function NumberButton(props){
    return(
        <button className="btn btn-success p-4 m-2">
            {props.value}
        </button>
    );
}
export default NumberButton;