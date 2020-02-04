import React from 'react';

const Header = (props) => (
    <nav style={{ background: "blue", color: "yellow" }} className={"navbar navbar-default sticky-top"}>
        <div className={"container"}>
            <div>Simpson's Memory Game</div>
            <div>Actual Score: {props.score}</div>
            <div>High Score: {props.topScore}</div>

        </div>
    </nav>
);

export default Header;