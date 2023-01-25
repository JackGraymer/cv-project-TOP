import React from "react";
import './components.css'
import { useState } from "react";

class Studies extends React.Component {
    constructor(props){
        super(props)
        this.state={study: [
            {
                title:null,
                university:null,
                place: null,
                from: null,
                to: null,
                id: crypto.randomUUID()
            }, 
        ]}
    }

    addStudies = () => {
        this.setState(prevState => ({
            study: [...prevState.study, {...this.state.study[0], id: crypto.randomUUID()}]
          }))
    }

    deleteStudies = (e) =>{
        console.log(e.target.parentNode.children)
        console.log(this.state.study)
        //this.setState({study.slice(0)})
    }

    studies = () => {
            return(
                this.state.study.map((obj,i)=> (
                    <div id={obj.id} key={i}>
                        {Object.keys(obj).map((obj,i) => (
                        
                        <input key={i} placeholder={obj[0].toUpperCase() + obj.slice(1)} className="study"></input>
                        
                       ))}
                       <button className="del btn" onClick={this.deleteStudies}>Delete</button>
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