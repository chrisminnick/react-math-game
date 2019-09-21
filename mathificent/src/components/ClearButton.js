import React from 'react';
function ClearButton(props){
    return(
        <input type="button"
               className="btn btn-success p-4 m-2"
               value="Clear"
               onClick={(e)=>{e.preventDefault();props.handleClick('')}}/>
    );
}
export default ClearButton;