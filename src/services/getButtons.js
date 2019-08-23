import React from 'react'
import alphabet from './alphabet'
import checkSign from './checkSign'

const getButtons = () =>{
    const buttons = alphabet.map((sign,index)=>{
        return(
            <button
                onClick={checkSign} 
                id={sign}
                key={index}
                >{sign.toUpperCase()}</button>
        )
    })
    return buttons;
}

export default getButtons;