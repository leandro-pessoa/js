import React from 'react'
import { useState } from 'react'
type Props = {
    num: number
    setNum: Function
}

export function State(props: Props){
    return(
        <div>
            <span>Valor do num no State: {props.num}</span>
            <p><button onClick={() => props.setNum(props.num + 10)}>Somar 10</button></p>
        </div>
    );
}