import React from "react"
import CountdownTimer from "./CountdownTimer"
import "./GameHeader.css"
import headerImage from "./../images/header.png"

class GameHeader extends React.Component {
    render() {
        return (
            <div className="GameHeader">
            <img src={headerImage}/>
            {this.props.finishTimestamp && (<CountdownTimer finishTimestamp={this.props.finishTimestamp}/>)}
            </div>
        );
    }
}

export default GameHeader;