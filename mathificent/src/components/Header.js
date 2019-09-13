import React from 'react';

function Header(){
    return(
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Mathificent</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="leader-boards">Leader Boards</a>
            </li>
        </ul>
        </div>
    </nav>
    </header>
    )
}
export default Header;