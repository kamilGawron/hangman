import React from 'react'
import NewGameBtn from './NewGameBtn'
import ChangeTheme from './ChangeTheme'
import Timer from './Timer'

function Header(){
    return(
        <React.Fragment>
            <h1>HANGMAN</h1>
            <NewGameBtn text="new game"/>
            <ChangeTheme />
            <Timer />
        </React.Fragment>
    )
}

export default Header;