import {CHANGE_THEME} from './types'
import {SET_LIGHT_THEME} from '../actions/types'
import {SET_DARK_THEME} from '../actions/types'

export const setLightTheme = () =>{
    return{
        type: SET_LIGHT_THEME
    }
}
export const setDarkTheme = () =>{
    return{
        type: SET_DARK_THEME
    }
}