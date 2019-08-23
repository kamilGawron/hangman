import React from 'react'
import getButtons from '../services/getButtons'
import {connect} from 'react-redux'

class Buttons extends React.Component{
    render(){
        const buttons = getButtons();
        return(
            <div id="buttons" className= {`buttons-${this.props.theme}`} >
                <div>
                    {buttons}
                </div>
            </div>
        )
    }
}

const mapStateToProps =state=>({
    theme:state.themes
})

export default connect(mapStateToProps)(Buttons)