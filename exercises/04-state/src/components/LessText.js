import React, { useState } from 'react';

function Lesstext({ text, maxLength }) {
    const [lessText, setLessText] = useState(true);

    function setDispLength() {
        console.log(maxLength);
        return text.substring(0, maxLength);
    }

    return (
        <div>
                <p>{lessText ? setDispLength() : text}</p>
                <button onClick={() => setLessText(false)}>Read More</button>
                <button onClick={() => setLessText(true)}>Read Less</button>
        </div>
    )

};

export default Lesstext;