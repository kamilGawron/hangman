import React from 'react'
import store from '../store'
import {connect} from 'react-redux'
import {setLightTheme,setDarkTheme} from '../actions/changeTheme'
import changeTheme from '../services/changeTheme'

class ChangeTheme extends React.Component{
    onChangeTheme = () =>{
        this.props.theme =="light"? store.dispatch(setDarkTheme()) : store.dispatch(setLightTheme());
        changeTheme();
    }
    render(){
        return(
                <div>
                    switch to night mode
                <input onChange={this.onChangeTheme} type="checkbox" id="switcher" />
                <label for="switcher"></label>
                </div>
        )
    }
}

const mapStateToProps = state => ({
    theme:state.themes
})

export default connect(mapStateToProps)(ChangeTheme);