import React from 'react'
import changeTheme from '../services/changeTheme'

class Switcher extends React.Component{
    render(){
        return(
                <div>
                    <span>switch to night mode</span>
                    <input onChange={changeTheme} type="checkbox" id="switcher" />
                    <label for="switcher"></label>
                </div>
        )
    }
}

export default Switcher;