import React, { useState} from 'react';

function CharacterCount() {
    const [keyCount, setKeyCount] = useState(0);
    return (
        <div>
            <textarea onChange={e => setKeyCount(e.target.value.length)}></textarea>
            <p>The input is { keyCount } characters long</p>
        </div>
    )
}

export default CharacterCount;