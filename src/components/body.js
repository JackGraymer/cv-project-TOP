import React from "react";
import './components.css'
import Data from "./data";

class Body extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="body">
                <Data />
            </div>
        )
    }
        
}

export default Body