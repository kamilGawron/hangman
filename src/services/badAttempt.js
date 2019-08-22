import store from '../store'
import {badAttempt} from '../actions/attempts'

const onBadAttempt =()=>{
    store.dispatch(badAttempt())    
}

export default onBadAttempt;
