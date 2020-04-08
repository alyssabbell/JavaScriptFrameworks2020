import React, { Component } from "react";

class LessText extends Component {
    state = {
        lessText: false,
        message: this.props.text,
        shortenedLength: this.props.maxLength
    };

    // method to shorten text
    displayLessText = () => {
        return this.state.message.substring(0, this.state.shortenedLength);
    };

    displayFullText = () => {
        return this.state.message;
    }
    // called first time componenet mounts
    componentDidMount() {
        this.displayFullText();
    }

    // called when component changes - a button click triggers a change

    render() {
        // console.log(this.props.maxLength);
        return (
            <>
                <p>{this.state.lessText ? this.displayLessText() : this.state.message}</p>
                <button type="button" onClick={() => { this.setState({ lessText: false }) }}>Read More</button>
                <button type="button" onClick={() => { this.setState({ lessText: true }) }}>Read Less</button>
            </>
        );
    }
}

export default LessText;