import {RIGHT_ATTEMPT} from './types'
import {BAD_ATTEMPT} from './types'
import {RESET_ATTEMPTS} from './types'

export const rightAttempt =()=>{
    return{
        type: RIGHT_ATTEMPT
    }
}
export const badAttempt =()=>{
    return{
        type: BAD_ATTEMPT
    }
}
export const resetAttempts =()=>{
    return{
        type: RESET_ATTEMPTS
    }
}


