import words from '../words'
import {NEW_WORD} from '../actions/types'


const initialState = words[Math.floor(Math.random()*words.length)]

export const wordsReducer = (state=initialState,action) =>{
    switch(action.type){
        case NEW_WORD:
            return words[Math.floor(Math.random()*words.length)]
            
        default:
            return state;
    }
}

