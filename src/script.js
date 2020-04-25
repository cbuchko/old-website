import React, { Component } from "react";
import ReactDOM from "react-dom";

class Scroller extends Component {
    constructor(props){
        super(props);
        this.state = {
            scrollDistance: window.pageYOffset
        };
    }
    componentDidUpdate() {
        console.log("poop");
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

function renderScroller(){
    if(document.querySelector("#down-scroll") != null){
        console.log("asdfasdfsd");
        let domContainer = document.querySelector("#down-scroll");
        ReactDOM.render(<Scroller />, domContainer);
    }
}
  
  setInterval(renderScroller, 250);