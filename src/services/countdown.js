import {maxTimerValue} from '../config'
import store from '../store'
import setLeftTime from '../actions/timer'

var timeouts =[];
var timer = document.getElementById("timer");

export const stopCountdown = () =>{
    if (timeouts[0]){
        for(let i=0;i<timeouts.length;i++){
            clearTimeout(timeouts[i])
        }
    }
}
export const setCountdown = () =>{
    stopCountdown();
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

