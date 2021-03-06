import React, { Component } from "react"

export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}; 
    }

    render() {
        
        return (
            <>
                <button className= "all"
                    onClick={this.props.handleAll}
                >All Todo</button>
                <button className="active" 
                    onClick={this.props.handleActive}
                >Active</button>
                <button className="completed"
                    onClick={this.props.handleCompleted}
                >Completed</button>
                <button className="clear"
                    onClick={this.props.handleClearAll}
                >Clear All</button><hr/>
            </>
        );
    }
}