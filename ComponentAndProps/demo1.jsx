import React from "react";
import ReactDOM from "react-dom";

/**
 * 通过修改state
 */
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timeID = setInterval(()=>this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render(props) {
        return (
            <div>
                <h4>It is {this.state.date.toLocaleTimeString()}</h4>
            </div>
        );
    }
}
function App(){
    return (
        <div>
            <Timer/>
            <Timer/>
            <Timer/>
        </div>
    );
}
ReactDOM.render(<App/>,document.getElementById("demo1"));