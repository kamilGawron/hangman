import React from 'react'
import NewGameBtn from './NewGameBtn'
import {connect} from 'react-redux'

class Win extends React.Component{
    render(){
        return(
            <div className="win">
                <h3>You win!</h3>
                <NewGameBtn 
                    text="win another one!"  
                    category={this.props.category}
                />
            </div>
        )
    }
}

const mapStateToProps = state =>({
    category:state.drawnWord.category
})

export default connect(mapStateToProps)(Win);