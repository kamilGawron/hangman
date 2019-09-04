import React from 'react'
import Header from './Header'
import WordFields from './WordFields'
import SignButtons from './SignButtons'
import Win from './Win'
import Loose from './Loose'
import HangmanImage from './HangmanImage'
import {connect} from 'react-redux'

class Game extends React.Component{
    render(){
        return(
            <div id="wrapper">
                <div>
                    <Header />
                </div>
                <div>
                    <WordFields />
                </div>
                <div>
                    {
                        this.props.mistakes!=6?
                            this.props.signs!=this.props.points?
                            <SignButtons /> : <Win />
                        :
                            <Loose />
                    }
                    <HangmanImage />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    signs:state.signsCounter,
    points:state.rightAttempts,
    mistakes:state.badAttempts,
})

export default connect (mapStateToProps)(Game)