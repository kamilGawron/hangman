import React from 'react'
import Menu from './Menu'
import Game from './Game'
import {connect} from 'react-redux'
import {showMenu} from '../services/showMenu'


class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                {
                    showMenu()? 
                        <Menu />
                        : 
                        <Game />
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state =>({
    gameState:state.gameState,
    startTimer:state.startTimer
})

export default connect (mapStateToProps)(App)