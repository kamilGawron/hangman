import {SET_LIGHT_THEME} from '../actions/types'
import {SET_DARK_THEME} from '../actions/types'

const themes =(state="light",action)=>{
    switch(action.type){
        case SET_LIGHT_THEME:
            return "light";
        case SET_DARK_THEME:
            return "dark";
        default:
            return state;
    }
}

export default themes;