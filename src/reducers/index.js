import {combineReducers} from 'redux'
import {wordsReducer} from './wordsReducer'
import signsCounter from './signsCounter'
import {rightAttempts} from './attempts'
import {badAttempts} from './attempts'
import themes from './themes'
import {maxTimerValue,leftTime,startTimer} from './timer'
import gameState from './gameState'

const allReducers = combineReducers({
    drawnWord: wordsReducer,
    signsCounter,
    rightAttempts,
    badAttempts,
    themes,
    leftTime,
    gameState,
    startTimer,
    maxTimerValue
})

export default allReducers;