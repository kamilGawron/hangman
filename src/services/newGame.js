import store from '../store'
import clearFields from '../services/clearFields'
import activateButtons from '../services/activateButtons'
import {newWord} from '../actions/words'
import {resetAttempts} from '../actions/attempts'
import {setCountdown,stopCountdown} from '../services/countdown'


const newGame = () =>{
    clearFields();
    activateButtons();
    store.dispatch(newWord());
    store.dispatch(resetAttempts());
    setCountdown();
}

export default newGame;