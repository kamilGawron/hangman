import React from 'react'
import changeTheme from '../services/changeTheme'
import {connect} from 'react-redux'

class Switcher extends React.Component{
    render(){
        return(
                <div>
                    <span>night mode</span>
                    <input 
                       onChange={changeTheme} 
                       type="checkbox" 
                       id="switcher" 
                       checked={this.props.theme=="dark"? true:false}
                    />
                    <label for="switcher"></label>
                </div>
        )
    }
}

const mapStateToProps = state => ({
    theme:state.themes
})

export default connect (mapStateToProps)(Switcher);