import {combineReducers} from 'redux'
import {wordsReducer} from './wordsReducer'
import signsCounter from './signsCounter'
import {rightAttempts} from './attempts'
import {badAttempts} from './attempts'
import themes from './themes'
import leftTime from './timer'

const allReducers = combineReducers({
    drawnWord: wordsReducer,
    signsCounter,
    rightAttempts,
    badAttempts,
    themes,
    leftTime,
})

export default allReducers;