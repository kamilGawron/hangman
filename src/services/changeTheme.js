import store from '../store'
import {setLightTheme,setDarkTheme} from '../actions/changeTheme'


const changeTheme = () =>{
    store.getState().themes =="light"? store.dispatch(setDarkTheme()) : store.dispatch(setLightTheme());
    const body = document.getElementsByTagName('body')[0];
    body.className=body.className=="body-light"? "body-dark" : "body-light";
}

export default changeTheme;