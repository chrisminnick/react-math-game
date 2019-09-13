import React from 'react';
function SelectInput(props){
    const values = props.values;
    const selectOptions = values.map((value)=>
        <option value={value} key={value.toString()}>{value}</option>
    );
    return(
        <div><label>{props.label}
            <select defaultValue = {props.currentValue} 
                    onChange = {props.setCurrentValue}
                    id="operation" 
                    className="form-control">
                {selectOptions}
            </select>
            </label>
        </div>
    )
}
export default SelectInput;