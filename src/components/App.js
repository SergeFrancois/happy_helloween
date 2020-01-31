import React from "react";
import axios from "axios";
import "./App.css";
import GamePanel from "./GamePanel";

class App extends React.Component {
    defaultState = {};
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }
    componentDidMount() {
        axios
            .get("http://sol-tst.herokuapp.com/api/v1/tasks/")
            .then(response => {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        tasks: response.data.tasks,
                        finishTimestamp: new Date(response.data.endsAt)
                    });
                }, 1000);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {});
    }
    render() {
        return (
            <div className="App">
                <GamePanel
                    loading={this.state.loading}
                    tasks={this.state.tasks}
                    finishTimestamp={this.state.finishTimestamp}
                />
            </div>
        );
    }
}

export default App;
