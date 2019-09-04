import React from 'react'
import {connect} from 'react-redux'
import Switcher from './Switcher'
import Levels from './Levels'
import Categories from './Categories'
import StartGameBtn from './StartGameBtn'

class Menu extends React.Component{
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
    theme:state.themes
})

export default connect(mapStateToProps)(Menu)