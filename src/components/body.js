import React from "react";
import './components.css'
import Data from "./data";
import Studies from "./studies";
import Work from "./work";


const Body =() => {
    
    const overview = () => {
        let inputs = document.querySelectorAll('input')
        inputs.forEach(element => {
            element.classList.toggle('preview')
        })
        let buttons = document.querySelectorAll('button')
        buttons.forEach(element =>
            element.classList.toggle('btn'))
            console.log(buttons)

    }

    
        return(
            <div className="body">
                <Data />
                <Studies />
                <Work />
                <p className="overview" onClick={overview}> Overview</p>
            </div>
        )
    }
        


export default Body