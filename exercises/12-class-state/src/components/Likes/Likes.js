import React, { Component } from "react";
import "./Likes.css";

class Likes extends Component {
  state = {
    likes: 0,
  };

  /**
   *  Complete this function here to increment the likes counter
   *
   */

  like = () => {};

  render() {
    /**
     * In the render function, add an onclick to the button to update the like count.
     *
     */
    return (
      <div className="container mt-4 h1">
        <h3>Likes</h3>
        <button className="btn btn-light">{this.state.likes} Likes</button>
      </div>
    );
  }
}

export default Likes;
