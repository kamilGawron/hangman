import React from 'react'
import NewGameBtn from './NewGameBtn'

class Win extends React.Component{
    render(){
        return(
            <div className="win">
                <h3>You win!</h3>
                <NewGameBtn text="win another one!"  />
            </div>
        )
    }
}

export default Win;