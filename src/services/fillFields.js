import React from 'react'

export let signCounter=0;

export const fillFields=word=>{
    signCounter=0;
    let stringArr=[],fields;
    for(let x in word){
        stringArr[x]=word[x]
    }
    fields = stringArr.map((sign,index)=>{
        if(sign!=" "){
            signCounter++;
            return (
                <div 
                   className="sign" 
                   key={index} 
                   sign={sign.toUpperCase()}
                >
                    <span className="hide">{sign.toUpperCase() }</span>
                </div>
            )
        }else{
            return(
                <div className="space" key={index}></div>
            )
        }
        
    })
    return fields;
}


