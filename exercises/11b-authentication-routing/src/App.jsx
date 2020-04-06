import React, { useState, useContext } from "react";
import "./App.css";
import axios from "axios";
import { CookieContext } from "./contexts/SessionContext.js";


function App({ history }) {
  //console.log("App history", { history });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [uuid, setUUID] = useContext(CookieContext);


  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios("http://localhost:7000/cookie/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: { username, password },
    })
      .then(response => {
        setUUID(response.data.uuid);
        // console.log("App.js", { history });
        history.push("/Cookie/Movies");
      })
      .catch(error => {
        setHasError(true);
        console.log(error);
        setErrorMessage(error.response.data.message);
      })
  };

  return (
    <div className="container mt-2 mb-5">
      <h1>Login</h1>
      <form className="form-inline mb-2" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username" className="mr-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control mr-3"
            required={true}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="mr-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control mr-3"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Login
        </button>
      </form>
      <p className="form-text">
        <small>
          The username is <em>{username}</em> and the password is <em>{password}</em>
        </small>
      </p>
      {hasError && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default App;
