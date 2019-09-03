import {NEW_WORD,SET_CATEGORY} from './types'

export const newWord = ()=>{
    return{
        type: NEW_WORD,
    }
}
export const setCategory = (categoryName)=>{
    return{
        type: SET_CATEGORY,
        category: categoryName
    }
}
