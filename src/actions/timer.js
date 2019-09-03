import {SET_LEFT_TIME,START_TIMER,STOP_TIMER,SET_MAX_TIMER_VALUE} from '../actions/types'

export const setMaxTimerValue =(time)=>{
    return{
        type: SET_MAX_TIMER_VALUE,
        time:time
    }
}
export const setLeftTime =(time)=>{
    return{
        type: SET_LEFT_TIME,
        time:time
    }
}
export const startTimer =()=>{
    return{
        type: START_TIMER
    }
}
export const stopTimer =()=>{
    return{
        type: STOP_TIMER
    }
}

