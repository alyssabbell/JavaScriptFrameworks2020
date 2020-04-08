import React, { Component } from "react";

class CharacterCount extends Component {

    state = {
        messageLength: 0
    }

    countChars = (e) => {
        this.setState({ messageLength: e.target.value.length });
    }

    render() {
        return (
            <>
                <textarea onChange={this.countChars}></textarea>
                <p>Character count: {this.state.messageLength}</p>
            </>
        );
    }
};

export default CharacterCount;