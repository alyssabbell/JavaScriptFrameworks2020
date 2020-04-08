import React, { Component } from "react";
import axios from "axios";
import ErrorBoundary from "./components/ErrorBoundary";

/** Convert me into a class component  */

class App extends Component {

  state = {
    message: "",
    error: "",
  };

  componentDidMount() {
    axios("https://ron-swanson-quotes.herokuapp.com/v2/quotes", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(resp => this.setState({ message: resp.data }))
      // .catch(error => console.log(error))
      .catch(error = this.setState({ error: error.data }));
  };

  render() {
    return (
      <>
        <ErrorBoundary error={this.state.error}>
          <div className="App">
            <h1>{this.state.message}</h1>
          </div>
        </ErrorBoundary >
      </>
    );
  }
}

export default App;
