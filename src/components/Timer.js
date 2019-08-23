import React from 'react'
import {connect} from 'react-redux'
import {
    setCountdown,
    stopCountdown,
    getFullSeconds,
    getHundredthsOfSecond,
    timerStyle
} from '../services/countdown'
import autoChooseSign from '../services/autoChooseSign'
import {maxTimerValue} from '../config'


class Timer extends React.Component{
    componentDidMount(){
        setCountdown();
    }
    componentDidUpdate(){
        if(this.props.leftTime.toFixed(2)<=0.01){
            autoChooseSign();
        }
        if ((this.props.signs===this.props.rightAttempts)||(this.props.badAttempts === 6)){
            stopCountdown();
        }
    }
    render(){
        return(
            <div>
                <div id="countdown">
                    <span>{getFullSeconds()}</span>
                    .
                    <span>{getHundredthsOfSecond()}</span>
                </div>
                <div 
                    style={timerStyle()} 
                    id="timer" 
                    className={`timer-${this.props.theme}`}>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    theme:state.themes,
    leftTime:state.leftTime,
    signs:state.signsCounter,
    rightAttempts:state.rightAttempts,
    badAttempts:state.badAttempts
    
})


export default connect(mapStateToProps)(Timer);