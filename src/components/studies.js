import React from "react";
import './components.css'
import { useState } from "react";

class Studies extends React.Component {
    constructor(props){
        super(props)
        this.state={
            study: {
                title:null,
                university:null,
                place: null,
                from: null,
                to: null,
            }
            
        }
    }


    addStudies = () => {
        this.setState({
            [Object.keys(this.state).length] : this.state.study
        })
    }

    deleteStudies = () =>{
        console.log(this.state)
    }

    studies = () => {
        console.log(Object.keys(this.state).length)
        console.log(this.state)
            return(
                Object.keys(this.state).map((obj,i) => (
                    <div key={i}>
                {Object.keys(this.state.study).map((obj,i) => (
                    <input key={i} placeholder={obj[0].toUpperCase() + obj.slice(1)}></input>
                    //{console.log(obj)}
                   ))}
                   <button className="del btn" onClick={this.deleteStudies}>delete</button>
                </div> 
                ))
                
            )
        
    }

    render = () =>{
        return(
            <div className="Studies">
                <h5>Studies</h5>
                <div>
                    {this.studies()}
                </div>
                <button onClick={this.addStudies}> Add Studies </button>
            </div>
            
        )
    }
}





export default Studies