import {START_GAME} from '../actions/types'
import {STOP_GAME} from '../actions/types'

const changeGameState = (state=false,action)=>{
    switch(action.type){
        case START_GAME:
            return true;
        case STOP_GAME:
            return false;
        default:
            return state;
    }
}

export default changeGameState;