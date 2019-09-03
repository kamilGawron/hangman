import React from 'react'
import {connect} from 'react-redux'
import {startGame,stopGame} from '../actions/changeGameState'
import {setCategory} from '../actions/words'
import {setLeftTime,setMaxTimerValue} from '../actions/timer'
import Switcher from './Switcher'


class Menu extends React.Component{
    onSetCategoryBtn = (e) =>{
        document.getElementsByClassName("category-active")[0].className="";
        e.target.className= "category-active";
        this.props.onSetCategory(e.target.innerHTML)
    }
    onSetLevelBtn = (e) =>{
        document.getElementsByClassName("level-active")[0].className="";
        e.target.className= "level-active";
        this.props.onSetLeftTime(parseInt(e.target.value))
        this.props.onSetMaxTimerValue(parseInt(e.target.value))
    }
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
                    <div>
                        category:
                    </div>
                    <div className= {`buttons-${this.props.theme}`} >
                        <div>
                            <button value="animals" onClick = {this.onSetCategoryBtn}>animals</button>
                            <button value="cities" onClick = {this.onSetCategoryBtn}>cities</button>
                        </div>
                    </div>
                    <div>
                        level:
                    </div>
                    <div>
                        <div>
                            <button value="15" onClick = {this.onSetLevelBtn}>easy</button>
                            <div>15 sec per sign</div>
                        </div>
                        <div>
                            <button value="10" onClick = {this.onSetLevelBtn}>medium</button>
                            <div>10 sec per sign</div>
                        </div>
                        <div>
                            <button value="5" onClick = {this.onSetLevelBtn}>hard</button>
                            <div>5 sec per sign</div>
                        </div>
                    </div>
                    <div className={`buttons-${this.props.theme}`}>
                        <div>
                            <button onClick ={this.props.onStartGame}>start game</button>
                        </div>
                    </div>
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
const mapDispatchToProps = ({
    onStartGame : startGame,
    onSetCategory:setCategory,
    onSetLeftTime : setLeftTime,
    onSetMaxTimerValue : setMaxTimerValue
})
export default connect(mapStateToProps,mapDispatchToProps)(Menu)