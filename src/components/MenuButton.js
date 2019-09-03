import React from 'react'
import {connect} from 'react-redux'
import stopAll from '../services/backToMenu'

class MenuButton extends React.Component{
    
    render(){
        return(
            <div className= {`buttons-${this.props.theme}`} >
                <div>
                    <button onClick={stopAll}>back to menu</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps =state=>({
    theme:state.themes
})


export default connect(mapStateToProps)(MenuButton)