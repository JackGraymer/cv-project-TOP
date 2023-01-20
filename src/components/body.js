import React from "react";
import './components.css'
import Data from "./data";

class Body extends React.Component {
    constructor(props){
        super(props)
    }

    overview = () => {
        let inputs = document.querySelectorAll('input')
        inputs.forEach(element => {
            element.classList.toggle('preview')
        })
            
    }

    render(){
        return(
            <div className="body">
                <Data />



                <button onClick={this.overview}> Overview</button>
            </div>
        )
    }
        
}

export default Body