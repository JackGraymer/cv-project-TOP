import React from "react";
import './components.css'
import Data from "./data";
import Studies from "./studies";
import Work from "./work";


class Body extends React.Component {
    constructor(props){
        super(props)
    }

    overview = () => {
        let inputs = document.querySelectorAll('input')
        inputs.forEach(element => {
            element.classList.toggle('preview')
        })
        let buttons = document.querySelectorAll('button')
        buttons.forEach(element =>
            element.classList.toggle('btn'))
            console.log(buttons)

    }

    render(){
        return(
            <div className="body">
                <Data />
                <Studies />
                <Work />
                <p className="overview" onClick={this.overview}> Overview</p>
            </div>
        )
    }
        
}

export default Body