import React from 'react'
import WordFields from './WordFields'
import Buttons from './Buttons'
import HangmanImage from './HangmanImage'
import Win from './Win'
import Loose from './Loose'
import Header from './Header'
import {connect} from 'react-redux'


class App extends React.Component{
    render(){
        return(
            <div className="wrapper">
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
                           <Buttons /> : <Win />
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
    mistakes:state.badAttempts
})

export default connect (mapStateToProps)(App)