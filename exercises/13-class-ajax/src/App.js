import React, { Component } from "react";
import axios from "axios";

/** Convert me into a class component  */

class App extends Component {

  state = {
    quote: "",
    hasError: false,
    isLoading: true
  };

  componentDidMount() {
    axios("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then(response => this.setState({ quote: response.data }))
      .catch(error => this.setState({ hasError: true }))
      .then(() => { this.setState({ isLoading: false }) })
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>{this.state.quote}</h1>
          {this.state.isLoading && <p>Loading ...</p>}
          {this.state.hasError && <p>There is an error</p>}
        </div>
      </>
    );
  }
}

export default App;
