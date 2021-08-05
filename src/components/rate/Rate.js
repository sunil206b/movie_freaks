import React, { useState } from 'react';


export default function Rate({callback}) {
    const [value, setsValue] = useState(5);
    return (
        <div>
            <input type='range' min='1' max='10' value={value} 
            onChange={(e) => setsValue(e.currentTarget.value)} />
            {value}
            <p>
                <button onClick={() => callback(value)}>Rate</button>
            </p>
        </div>
    )
}
