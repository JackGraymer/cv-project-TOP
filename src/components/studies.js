import React from "react";
import './components.css'
import { useState } from "react";

class Studies extends React.Component {
    constructor(props){
        super(props)
        this.state={study: [
            {
                title: '',
                university:'',
                place: '',
                from: '',
                to: '',
                id: crypto.randomUUID()
            }, 
        ]}
    }

    addStudies = () => {
        this.setState(prevState => ({
            study: [...prevState.study, {...this.state.study[0],title: '',university:'', place: '', from: '', to: '' ,id: crypto.randomUUID()}, ]
          }))
    }

    deleteStudies = (e) => {
        if(this.state.study.length >1){
            let newState = this.state.study.filter(a => a.id !== e.target.parentNode.id)
            this.setState({
                study: newState
            })
        }console.log(this.state.study)
        
    }

    updateStudies = (e) => {
        console.log(this.state.study)
    }

    studies = () => {
            return(
                this.state.study.map((obj,i)=> (
                    <div id={obj.id} key={i}>
                        
                        {Object.entries(obj).map((obj,i) => (
                            
                            
                        <input key={i} placeholder={obj[0][0].toUpperCase() + obj[0].slice(1)} className="study" defaultValue={obj[1]} onChange={this.updateStudies}></input>
                        
                        
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