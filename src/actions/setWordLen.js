import {SET_WORD_LEN} from './types'

export const setWordLen =length=>{
    return{
        type: SET_WORD_LEN,
        len:length
    }
}