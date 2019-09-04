import React from 'react'
import {connect} from 'react-redux'
import LevelsButton from './LevelsButton'

class Levels extends React.Component{
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
                    <LevelsButton value="15" text="easy" />
                    <LevelsButton value="10" text="medium" />
                    <LevelsButton value="5" text="hard" />
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state =>({
    maxTime : state.maxTimerValue,
})

export default connect(mapStateToProps)(Levels)
