import React from "react";
import "./GamePanel.css";
import GameHeader from "./GameHeader";
import GameList from "./GameList";
import { CircleSpinner } from "react-spinners-kit";

class GamePanel extends React.Component {
    static defaultState = { isEmpty: false };

    constructor(props) {
        super(props);
        this.state = { isEmpty: props.isEmpty };
    }

    handleSetBack() {
        this.setState({ isEmpty: true });
    }

    render() {
        return (
            <div className="GamePanel">
                {!this.state.isEmpty && (<div
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        zIndex: 1,
                        display: "flex",
                        justifyContent: "center"
                        
                    }}
                >
                    <GameHeader
                        finishTimestamp={
                            this.props.loading
                                ? null
                                : this.props.finishTimestamp
                        }
                    />
                    <div className="GameListWithSpiner">
                    <GameList
                        tasks={this.props.tasks}
                        handleSetBack={this.handleSetBack.bind(this)}
                    />
                    <div className="spiner">
                        <CircleSpinner
                            size={100}
                            color="#fff"
                            loading={this.props.loading}
                        />
                        </div>
                    </div>
                </div>)}
                <img
                    style={{ transform: "scale(1.01)", display: "block" }}
                    src="./../images/background-screen.png"
                />
            </div>
        );
    }
}

export default GamePanel;
