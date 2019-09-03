import React from 'react'
import NewGameBtn from './NewGameBtn'
import Switcher from './Switcher'
import MenuButton from './MenuButton'
import Timer from './Timer'
import {connect} from 'react-redux'

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1>HANGMAN</h1>
                <NewGameBtn 
                    text="new word"
                    category={this.props.category}
                />
                <MenuButton />
                <Switcher />
                <Timer />
            </React.Fragment>
        ) 
    }
}

const mapStateToProps = state =>({
    category : state.drawnWord.category
})

export default connect(mapStateToProps)(Header);