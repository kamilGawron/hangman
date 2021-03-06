import React from 'react'
import {connect} from 'react-redux'
import {setCategory} from '../actions/words'

class Categories extends React.Component{
    onSetCategoryBtn = (e) =>{
        document.getElementsByClassName("category-active")[0].className="";
        e.target.className= "category-active";
        this.props.onSetCategory(e.target.innerHTML);
    }
    componentDidMount(){
        let activeCategoryBtn = [...document.querySelectorAll(`#menu button[value="${this.props.category}"]`)];
        activeCategoryBtn[0].className = "category-active";
    }
    render(){
        return (
            <React.Fragment>
                <div>
                    category:
                </div>
                <div className= {`buttons-${this.props.theme}`} >
                    <div>
                        <button value="animals" onClick = {this.onSetCategoryBtn}>animals</button>
                        <button value="cities" onClick = {this.onSetCategoryBtn}>cities</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state =>({
    theme:state.themes,
    category: state.drawnWord.category
})
const mapDispatchToProps = ({
    onSetCategory:setCategory,
})
export default connect(mapStateToProps,mapDispatchToProps)(Categories)