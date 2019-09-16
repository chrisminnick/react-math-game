import React from 'react';
import {Link} from 'react-router-dom';
function PlayButton(){
    return(
    <Link className="btn btn-success" to="/play">Play!</Link>
    )
}
export default PlayButton;