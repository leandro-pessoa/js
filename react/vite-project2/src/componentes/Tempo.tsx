import React from 'react'

export function Tempo(){
    return(
        <div>
            <h2>Tempo</h2>
            <div className='time'>
                {new Date().toLocaleTimeString()}
            </div>
        </div>
    );
} 