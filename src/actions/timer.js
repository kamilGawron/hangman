import {SET_LEFT_TIME} from '../actions/types'

const setLeftTime =(time)=>{
    return{
        type: SET_LEFT_TIME,
        time:time
    }
}

export default setLeftTime;