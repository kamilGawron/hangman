import React from 'react'
import {connect} from 'react-redux'
import {startGame} from '../actions/changeGameState'

class StartGameBtn extends React.Component{
    render(){
        return(
            <div className={`buttons-${this.props.theme}`}>
                <div>
                    <button onClick ={this.props.onStartGame}>start game</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    theme:state.themes
})
const mapDispatchToProps = ({
    onStartGame : startGame
})
export default connect(mapStateToProps,mapDispatchToProps)(StartGameBtn)