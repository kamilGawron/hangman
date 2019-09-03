import store from '../store'

export const showMenu = () =>{

    if (store.getState().gameState||store.getState().startTimer){
        return false
    }
    else{
        return true;
    }
}

