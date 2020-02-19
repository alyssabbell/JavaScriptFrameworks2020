import React from 'react';

// function Welcome(props) {
//     return (
//         <div className="App">
//             <h1>Hello, {props.name} </h1>
//         </div>
//     )
// }

function Welcome({ name="user"}) {
    return (
        <div className="App">
            <h1>Hello, { name } </h1>
        </div>
    )
}

// Welcome.defaultProps = {
//     name : "user",
// }

export default Welcome;