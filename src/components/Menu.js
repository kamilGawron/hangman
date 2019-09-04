import React from 'react'
import {connect} from 'react-redux'
import {startGame,stopGame} from '../actions/changeGameState'
import Switcher from './Switcher'
import Levels from './Levels'
import Categories from './Categories'
import StartGameBtn from './StartGameBtn'


class Menu extends React.Component{
    componentDidMount(){
        let activeCategoryBtn = [...document.querySelectorAll(`#menu button[value="${this.props.category}"]`)];
        let activeLevelBtn = [...document.querySelectorAll(`#menu button[value="${this.props.maxTime}"]`)];
        activeCategoryBtn[0].className = "category-active";
        activeLevelBtn[0].className = "level-active";
    }
    render(){
        return(
            <div id="menu">
                <div className={`menu-${this.props.theme}`}>
                    <div>
                        <h1>hangman</h1>
                        <Switcher/>
                    </div>
                    <Categories />
                    <Levels />
                    <StartGameBtn />
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    theme:state.themes,
    maxTime : state.maxTimerValue,
    category: state.drawnWord.category
})

export default connect(mapStateToProps)(Menu)