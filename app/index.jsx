import React from "react";
import ReactDOM from "react-dom";

const Avatar = React.createClass(
    {
        render()
        {
            return ( <img className="Avatar" src={this.props.user.avatarUrl} alt={this.props.user.name}/> );
        }
    }
);
const Welcome = React.createClass({
    handleClick: function (e) {
        e.preventDefault();
        this.props.className = "H3";
    },
    getDefaultProps: function () {
        return {
            name: "K Liu"
        };
    },
    render(){
        return (<h2 onClick={this.handleClick}>welcome,{this.props.name}</h2>);
    }

});

const App = React.createClass({
    render(){
        return (
            <div>
                <Welcome name="K Liu"/>
                <Welcome name="Cao ye"/>
                <Welcome name="Changxing Liu"/>
            </div>)
    }
});

ReactDOM.render(
    <Welcome/>,
    document.getElementById("app")
);