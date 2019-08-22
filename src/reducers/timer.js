import {SET_LEFT_TIME} from '../actions/types'
import {maxTimerValue} from '../config' 

let returnCurrTime = () =>{
    const data = new Date();
    return data.getTime(); 
}
const leftTime = (state=maxTimerValue,action)=>{
    switch(action.type){
        case SET_LEFT_TIME:
            return  action.time;
        default:
            return state
    }
}
export default leftTime;