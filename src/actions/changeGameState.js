import {START_GAME} from '../actions/types'
import {STOP_GAME} from '../actions/types'
import newGame from '../services/newGame'

export const startGame = () =>{
    newGame();
    return {
        type:  START_GAME
    }
}

export const stopGame = () =>{
    return {
        type:  STOP_GAME
    }
}

