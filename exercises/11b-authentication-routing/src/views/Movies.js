import React, { useEffect, useState, useContext } from "react";
import { CookieContext } from "../contexts/SessionContext";
import { removeSessionCookie } from "../utilities/Cookies.util";
import axios from "axios";

export const Movies = ({ history }) => {



    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const [uuid] = useContext(CookieContext);

    useEffect(() => {

        axios("http://localhost:7000/cookie/movies", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                id: uuid // Passing to the token to the API here, where it is a parameter
            }
        })
            .then(resp => setMovies(resp.data))
            .catch(error => setErrorMessage("There's an error loading movies.."))
    }, [uuid]);

    console.log("inside Movies props", props);

    return (
        <div className="container mt-2 mb-5">
            <div className="d-flex justify-content-between">
                <h1 className="h2">You are logged in!</h1>
                {/* Make this button functional */}
                <button className="btn btn-primary" onClick={() => {
                    //console.log({ history });
                    removeSessionCookie();
                    history.push("/");
                }}>Logout</button>
            </div>
            <p>
                Notice that when you refresh the page, you are still logged in. That's
                because the token is stored in local storage.
        </p>
            <p>
                To delete the token, press <code>command+option+i</code> for Mac or{" "}
                <code>ctrl+shift+i</code> for Windows to open the Developer Tools. Click
          on the "Applications" tab in Chrome (or the "Storage" tab in Firefox).
          You will need to refresh the page after you delete the token.
        </p>
            {Object.values(movies).map((movie, idx) => {
                return (
                    <div className="media mb-3" key={`movie-${idx}`}>
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            width="150"
                            height="220.875"
                            className="mr-3"
                        />
                        <div className="media-body">
                            <h2 className="h3">{movie.title}</h2>
                            <p>{movie.synopsis}</p>
                        </div>
                    </div>
                );
            })}
            {errorMessage && (
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>
            )}
        </div>
    )

}

export default Movies;