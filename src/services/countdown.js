import store from '../store'
import {setLeftTime} from '../actions/timer'

var timeouts =[];
var timer = document.getElementById("timer");
var maxTimerValue= 0 ;

export const stopCountdown = () =>{
    if (timeouts[0]){
        for(let i=0;i<timeouts.length;i++){
            clearTimeout(timeouts[i])
        }
    }
}
export const setCountdown = () =>{
    stopCountdown();
    maxTimerValue = store.getState().maxTimerValue;
    store.dispatch(setLeftTime(maxTimerValue))
    let counter = 0;
    for(let i=maxTimerValue;i>=0;i-=maxTimerValue/100/maxTimerValue){
        timeouts.push(
            setTimeout(()=>{
                store.dispatch(setLeftTime(i));
               
            },counter+=10)
        )
        
    }
}

export const getFullSeconds = () =>{
    return (
        Math.floor(store.getState().leftTime)
    )
}
export const getHundredthsOfSecond = () =>{
    return (
        store.getState().leftTime.toFixed(2).toString().split(".")[1]
    )
}
export const timerStyle = () =>{
    maxTimerValue = store.getState().maxTimerValue;
    return {
        width:(maxTimerValue-store.getState().leftTime)/maxTimerValue*100+'%',
    }
}

