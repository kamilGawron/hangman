import React from 'react'
import {connect} from 'react-redux'
import {fillFields,signCounter} from '../services/fillFields'
import {setWordLen} from '../actions/setWordLen'

class WordFields extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let fields = fillFields(this.props.word);
        this.props.onSetWordLen(signCounter);
        return(
            <div id="fields" className= {`fields-${this.props.theme}`}>
               <div>category: {this.props.category}</div>
                {fields}
            </div>
        )
    }
}
const mapStateToProps=state=>({
    word:state.drawnWord.word,
    theme:state.themes,
    category : state.drawnWord.category
})

const mapDispatchToProps =({
    onSetWordLen:setWordLen
})

export default connect(mapStateToProps,mapDispatchToProps)(WordFields)