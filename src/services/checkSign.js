import {rightAttempt} from '../actions/attempts'
import store from '../store'
import badAttempt from './badAttempt'
import {setCountdown} from '../services/countdown'

const checkSign = (e) =>{
    setCountdown();
    let fields=[],isGoodAttempt = false;
    fields = document.querySelectorAll('div[sign]')
    e.target.disabled = true;
    for(let x of fields){
        if(e.target.id.toUpperCase()==x.getAttribute("sign").toUpperCase()){
            isGoodAttempt = true;
            x.childNodes[0].classList.remove("hide");
            x.childNodes[0].classList.add("show");
            store.dispatch(rightAttempt());
        }
    }
    if(!isGoodAttempt){
        badAttempt();
    }
}

export default checkSign;