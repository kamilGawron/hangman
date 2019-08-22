import React from 'react'
import NewGameBtn from './NewGameBtn'
import {connect} from 'react-redux'

class Loose extends React.Component{
    render(){
        return(
            <div className="loose">
               <div>
                   <h3>You loose!!!</h3>
               </div>
               <div>
                   <span>Expected word:</span>
                   <span>{this.props.expectedWord.toUpperCase()}</span>
               </div>
               <div>
                   <NewGameBtn text="Try again" />
               </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    expectedWord:state.drawnWord
})
export default connect(mapStateToProps)(Loose);