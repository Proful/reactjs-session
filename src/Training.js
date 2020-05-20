import React from "react";

import Hello from "./Hello";

class Training extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "name" : "Steve"
        }
    }

    handleClick = () => {
        console.log("you have clicked..");
        // ❌this.state.name = "Patrick"

        this.setState({
            name: "Patrick"
        })

        console.log("State: " + this.state.name)//❌ Wrong vallue
    }

    render () {
        return (
          <div>
            <h1>Hello from {this.state.name }</h1>

            <button onClick={this.handleClick}>Change Name</button>
          </div>
        );
    }
}

export default Training;