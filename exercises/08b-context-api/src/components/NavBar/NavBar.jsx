import React from "react";
import Login from "../Login/Login";

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-warning">
      <a className="navbar-brand" href="#">
        GossipBook
      </a>
      <Login />
    </nav>
  );
}

export default NavBar;
