import React from "react";
import ProgressBar from "./ProgressBar";
import "./GameTaskListItem.css";

const taskInfoByType = {
    time: {
        description: "Выиграть три игры, каждую менее чем за 3 минуты",
        icon: "task-time.png"
    },
    kings: {
        description: "Выиграть три игры, разложив всех королей",
        icon: "task-kings.png"
    },
    tournaments: {
        description: "Выиграть пять турниров подряд",
        icon: "task-tournaments.png"
    }
};

class GameTaskListItem extends React.Component {
    static defaultProps = { progress: 0 };

    constructor(props) {
        super(props);
    }

//
    render() {
        return (
            <div className="GameTaskListItem" style={{height: this.props.height}}>
            <div style={{paddingBottom: this.props.gap}}>
            <div className="GameTaskListItem-icon">
                    <img style={{height: "100%", marginRight: "20%"}}
                        src={`./../images/${
                            taskInfoByType[this.props.type].icon
                        }`}
                    />
                    </div>
                    <div className="GameTaskListItem-description">
                    <span>
                        {taskInfoByType[this.props.type].description}
                        </span>
                    </div>
                        <ProgressBar
                            className="GameTaskListItem-ProgressBar"
                            progress={this.props.progress}
                        />
                        <button
                            className="GameTaskListItem-button"
                            style={{
                                visibility:
                                    this.props.progress == 100
                                        ? "visible"
                                        : "hidden"
                            }}
                            onClick={this.props.handleSetBack}
                        >
                            Поставить рубашку
                        </button>
            </div>
            </div>
        );
    }
}

export default GameTaskListItem;
