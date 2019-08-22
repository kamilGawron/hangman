import {RIGHT_ATTEMPT} from '../actions/types'
import {RESET_ATTEMPTS} from '../actions/types'
import {BAD_ATTEMPT} from '../actions/types'

export const rightAttempts = (state=0,action)=>{
    switch(action.type){
        case RIGHT_ATTEMPT:
            return state+1;
        case RESET_ATTEMPTS:
            return 0;
        default:
            return state;
    }
}
export const badAttempts = (state=0,action)=>{
    switch(action.type){
        case BAD_ATTEMPT:
            return state+1;
        case RESET_ATTEMPTS:
            return 0;
        default:
            return state;
    }
}

