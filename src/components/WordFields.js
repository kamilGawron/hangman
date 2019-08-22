import React from 'react'
import {connect} from 'react-redux'
import {fillFields} from '../services/fillFields'
import {setWordLen} from '../actions/setWordLen'
import {signCounter} from '../services/fillFields'
class WordFields extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let fields = fillFields(this.props.word);
        this.props.onSetWordLen(signCounter);
        return(
            <div id="fields" className= {`fields-${this.props.theme}`}>
                {fields}
            </div>
        )
    }
}
const mapStateToProps=state=>({
    word:state.drawnWord,
    theme:state.themes
})

const mapDispatchToProps =({
    onSetWordLen:setWordLen
})

export default connect(mapStateToProps,mapDispatchToProps)(WordFields)