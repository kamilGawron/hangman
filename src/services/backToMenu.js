import {stopTimer} from '../actions/timer'
import {stopGame} from '../actions/changeGameState'
import {stopCountdown} from '../services/countdown'
import store from '../store'

const stopAll = () =>{
    store.dispatch(stopTimer());
    store.dispatch(stopGame());
    stopCountdown();
}

export default stopAll;