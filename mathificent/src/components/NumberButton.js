import React from 'react';
function NumberButton(props){
    return(
        <input type="button"
               className="btn btn-success p-4 m-2"
               value={props.value}
               onClick={(e)=>{e.preventDefault();console.log(props.value);props.handleClick(props.value)}}/>
    );
}
export default NumberButton;