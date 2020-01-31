import React from "react";
import moment from "moment";
import "moment/locale/ru.js";
import "moment-precise-range-plugin";
import humanizeDuration from "humanize-duration";
import "./CountdownTimer.css";

//moment.locale("ru")

class CountdownTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            remainingTimeComponents: this.getRemainingTimeComponents(
                props.finishTimestamp
            )
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    getRemainingTimeComponents(finishTimestamp) {
        let duration = humanizeDuration(finishTimestamp - Date.now(), {
            language: "ru",
            round: true,
            delimiter: "|"
        });
        return duration.split("|").map(s => {
            let pair = s.split(" ");
            return { value: pair[0], unitName: pair[1] };
        });
    }

    tick() {
        this.setState({
            remainingTimeComponents: this.getRemainingTimeComponents(
                this.props.finishTimestamp
            )
        });
    }

    render() {
        return (
            <div className="CountdownTimer">
                {this.state.remainingTimeComponents.map((tc, i) => (
                    <>
                        {i > 0 && <span className="delimiter">:</span>}
                        <span className="component">
                            <div className="value">{tc.value}</div>
                            <div className="unit">{tc.unitName}</div>
                        </span>
                    </>
                ))}
            </div>
        );
    }
}

export default CountdownTimer;
