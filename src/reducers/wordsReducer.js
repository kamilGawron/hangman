import words from '../words'
import {NEW_WORD,SET_CATEGORY} from '../actions/types'
import store from '../store'

const getCategoryId = (name) =>{
    for (let x of words){
        if (x.category==name){
            return x.words
        }
    }
} 
const getRandomWord = (category) =>{
    return (
        getCategoryId(category)[Math.floor(Math.random()*getCategoryId(category).length)]
    )
}
const initialState ={
    category: "animals",
    word:""
}
export const wordsReducer = (state=initialState,action) =>{
    switch(action.type){
        case SET_CATEGORY:
            return {
                ...state,
                category:action.category
            }
        case NEW_WORD:
            return {
                ...state,
                word:getRandomWord(state.category)
            }
        default:
            return state;
    }
}

