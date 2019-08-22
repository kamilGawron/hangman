import React from 'react'
import alphabet from '../services/alphabet'
import checkSign from '../services/checkSign'
import {connect} from 'react-redux'

class Buttons extends React.Component{
    render(){
        const buttons = alphabet.map((sign,index)=>{
            return(
                <button
                    onClick={checkSign} 
                    id={sign}
                    key={index}
                >{sign.toUpperCase()}</button>
            )
        })
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