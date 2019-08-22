import React from 'react'
import newGame from '../services/newGame'
import {connect} from 'react-redux'
class NewGameBtn extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={`buttons-${this.props.theme}`}>
               <div>
                   <button onClick={newGame}>{this.props.text.toUpperCase()}</button> 
               </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    theme:state.themes
})

export default connect(mapStateToProps)(NewGameBtn);