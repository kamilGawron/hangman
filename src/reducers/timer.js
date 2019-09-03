import {START_TIMER,STOP_TIMER,SET_MAX_TIMER_VALUE,SET_LEFT_TIME} from '../actions/types'

export const maxTimerValue = (state=10,action)=>{
    switch(action.type){
        case SET_MAX_TIMER_VALUE:
            return  action.time;
        default:
            return state
    }
}
export const leftTime = (state=10,action)=>{
    switch(action.type){
        case SET_LEFT_TIME:
            return  action.time;
        default:
            return state
    }
}
export const startTimer = (state=false,action)=>{
    switch(action.type){
        case START_TIMER:
            return  true;
        case STOP_TIMER:
            return  false;
        default:
            return state
    }
}
