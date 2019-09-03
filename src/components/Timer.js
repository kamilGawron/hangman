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
import {startTimer} from '../actions/timer'


class Timer extends React.Component{
    componentWillUpdate(){
        
    }
    componentDidUpdate(){
            if(this.props.gameState&&!this.props.startTimer){
                setCountdown();
                this.props.onStartTimer();
            }

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
    badAttempts:state.badAttempts,
    gameState:state.gameState,
    startTimer:state.startTimer
})
const mapActionsToProps =({
    onStartTimer:startTimer
})


export default connect(mapStateToProps,mapActionsToProps)(Timer);