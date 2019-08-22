import React from 'react'
import {connect} from 'react-redux'

import {lightImages}  from '../services/images'
import {darkImages} from '../services/images'

class HangmanImage extends React.Component{
    render(){
        let light = lightImages;
        let dark = darkImages;

        let path = `${this.props.theme}[${this.props.nr}]`;
        return(
            <div>
                <img src={eval(path)} alt=""/>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    nr:state.badAttempts,
    theme:state.themes 
})

export default connect(mapStateToProps)(HangmanImage);