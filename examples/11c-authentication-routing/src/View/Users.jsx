import React, { useEffect, useState, useContext } from "react";
import { CookieContext } from "../Context/SessionContext";
import axios from "axios";

export const Users = ({ history }) => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  /**
   * Getting the token (UUID) we stored in the Context API.
   */
  const [uuid, setUUID] = useContext(CookieContext);

  useEffect(() => {
    /**
     * The API should not give you back any users unless you are logged in.
     * To prove that you are logged in, you must pass the token (UUID) in the API.
     */
    axios
      .get("http://localhost:7000/cookie/users", {
        /**
         * We could use the "Authorize" header like we did in the local storage example,
         * but I'm showing you an alternative way of doing this,
         * where you pass the token as a query parameter.
         */
        params: {
          id: uuid // Try commenting me out and see what happens when no token is passed
        }
      })
      .then(resp => setUsers(resp.data.data))
      .catch(err => {
        console.error(err);
        setErrorMessage("Oh no! An unexpected error occurred.");
      });
  }, [uuid]);

  return (
    <div className="container mt-2 mb-5">
      <div className="d-flex justify-content-between">
        <h1 className="h2">You are logged in!</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            setUUID();
            history.push("/");
          }}
        >
          Logout
        </button>
      </div>
      <p>
        Notice that when you refresh the page, you are still logged in. That's
        because the token is stored inside of a cookie.
      </p>
      {users.map(user => {
        const key = `user-${user.id}`;
        const name = `${user.firstName} ${user.lastName}`;
        return (
          <div key={key}>
            <img src={user.avatar} alt={name} />
            <p>{name}</p>
          </div>
        );
      })}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
};
