import React from "react";
import ProgressBar from "./ProgressBar";
import GameTaskListItem from "./GameTaskListItem";
import "./GameList.css";

class GameList extends React.Component {
    render() {
        return (
            <div className="GameList">
                <img src="./../images/background.png" />
                <div className="GameList-a">
                    <div className="a">
                        {this.props.tasks &&
                            this.props.tasks.map(task => (
                                <GameTaskListItem
                                handleSetBack={this.props.handleSetBack}
                                    progress={task.progress}
                                    type={task.type}
                                    height="33.3%"
                                    gap="3%"
                                    
                                />
                            ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default GameList;
