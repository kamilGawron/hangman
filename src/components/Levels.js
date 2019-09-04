import React from 'react'
import {connect} from 'react-redux'
import {setLeftTime,setMaxTimerValue} from '../actions/timer'

class Levels extends React.Component{
    onSetLevelBtn = (e) =>{
        document.getElementsByClassName("level-active")[0].className="";
        e.target.className= "level-active";
        this.props.onSetLeftTime(parseInt(e.target.value))
        this.props.onSetMaxTimerValue(parseInt(e.target.value))
    }
    componentDidMount(){
        let activeLevelBtn = [...document.querySelectorAll(`#menu button[value="${this.props.maxTime}"]`)];
        activeLevelBtn[0].className = "level-active";
    }
    render(){
        return(
            <React.Fragment>
                <div>
                    level:
                </div>
                <div>
                    <div>
                        <button value="15" onClick = {this.onSetLevelBtn}>easy</button>
                        <div>15 sec per sign</div>
                    </div>
                    <div>
                        <button value="10" onClick = {this.onSetLevelBtn}>medium</button>
                        <div>10 sec per sign</div>
                    </div>
                    <div>
                        <button value="5" onClick = {this.onSetLevelBtn}>hard</button>
                        <div>5 sec per sign</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state =>({
    maxTime : state.maxTimerValue,
})
const mapDispatchToProps = ({
    onSetLeftTime : setLeftTime,
    onSetMaxTimerValue : setMaxTimerValue
})

export default connect(mapStateToProps,mapDispatchToProps)(Levels)
