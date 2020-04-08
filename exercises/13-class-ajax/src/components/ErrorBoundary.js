import React, { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        errMessage: this.props.error,
    };

    componentDidCatch(error) {
        this.setState({
            errMessage: error
        })
    };

    render() {
        if (this.state.errMessage) {
            return (
                <>
                    <h3>{this.state.errMessage}</h3>
                </>
            );

        }
    }
};

export default ErrorBoundary;