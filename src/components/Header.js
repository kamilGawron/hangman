import React from 'react'
import NewGameBtn from './NewGameBtn'
import Switcher from './Switcher'
import Timer from './Timer'

function Header(){
    return(
        <React.Fragment>
            <h1>HANGMAN</h1>
            <NewGameBtn text="new game"/>
            <Switcher />
            <Timer />
        </React.Fragment>
    )
}

export default Header;