import React from "react";
import "./ProgressBar.css"

class ProgressBar extends React.Component {
    static defaultProps = { progress: 0 };

    constructor(props) {
        super(props);
        this.state = { progress: props.progress };
    }

    get progress() {
        return this.state.progress;
    }

    set progress(progress) {
        this.setState({progress:progress});
    }

    render() {
        return (<div className="ProgressBar">
            <div className="ProgressBar-border">
            </div>
            <div className="ProgressBar-bar" style={{width: this.state.progress + "%"}} />
        </div>)
    }
}

export default ProgressBar;