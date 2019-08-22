import {SET_WORD_LEN} from '../actions/types'

const signsCounter = (state=0,action)=>{
    switch(action.type){
        case SET_WORD_LEN:
            return action.len;
        default:
            return state;
    }
}

export default signsCounter;