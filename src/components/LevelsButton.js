import React from 'react'
import {connect} from 'react-redux'
import {setLeftTime,setMaxTimerValue} from '../actions/timer'

class LevelsButton extends React.Component{
    constructor(props){
        super(props);
    }
    onSetLevelBtn = (e) =>{
        document.getElementsByClassName("level-active")[0].className="";
        e.target.className= "level-active";
        this.props.onSetLeftTime(parseInt(e.target.value))
        this.props.onSetMaxTimerValue(parseInt(e.target.value))
    }
    render(){
        return(
            <div>
                <button value={this.props.value} onClick = {this.onSetLevelBtn}>{this.props.text}</button>
                <div>{this.props.value} sec per sign</div>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    
})
const mapDispatchToProps = ({
    onSetLeftTime : setLeftTime,
    onSetMaxTimerValue : setMaxTimerValue
})

export default connect (mapStateToProps,mapDispatchToProps)(LevelsButton)