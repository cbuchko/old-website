import React, { Component } from "react";
import ReactDOM from "react-dom";

class Scroller extends Component {
    constructor(props){
        super(props);
        this.state = {
            scrollDistance: window.pageYOffset
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            500
        );       
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            scrollDistance: window.pageYOffset
        });
    }

    render() { 
        if(this.state.scrollDistance < 5){    
            return (
                <div>
                    <a href="#about-me"><img className="down-arrow" src="./images/down-arrow.svg"></img></a>
                </div>
            );
        }
        return null;
        }
}

if(document.querySelector("#down-scroll") != null){
        console.log("asdfasdfsd");
        let domContainer = document.querySelector("#down-scroll");
        ReactDOM.render(<Scroller />, domContainer);
}