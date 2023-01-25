import React from "react";
import './components.css'
import { useState } from "react";

class Work extends React.Component {
    constructor(props){
        super(props)
        this.state={study: [
            {
                role: '',
                company:'',
                place: '',
                from: '',
                to: '',
                duty:'',
                id: crypto.randomUUID()
            }, 
        ]}
    }

    addStudies = () => {
        this.setState(prevState => ({
            study: [...prevState.study, {...this.state.study[0],role: '',company:'', place: '', from: '', to: '' , duty:'', id: crypto.randomUUID()}, ]
          }))
    }

    deleteStudies = (e) => {
        if(this.state.study.length >1){
            let newState = this.state.study.filter(a => a.id !== e.target.parentNode.id)
            this.setState({
                study: newState
            })
        }
    }

    updateStudies = (e, id) => {
        this.setState({
            ...this.state,
            study: this.state.study.map((input) => 
                e.target.parentNode.id === input.id? {...input, [e.target.classList[0]] : e.target.value}: input
            )
        })
    }

    studies = () => {
            return(
                this.state.study.map((obj,i)=> (
                    <div id={obj.id} key={i}>
                        {Object.entries(obj).map((obj,i) => 
                                               
                            {if(i<6){
                               return (
                                    <input type='text' key={i} placeholder={obj[0][0].toUpperCase() + obj[0].slice(1)} className={obj[0] + ' study'} value={obj[1]} onChange={this.updateStudies}></input>
                                )
                                }
                            }    
                        )}
                       <button className="del" onClick={this.deleteStudies}>Delete</button>
                    </div>
                ))             
            )            
    }

    render = () =>{
        return(
            <div className="experience container">
                <h5>Experience</h5>
                
                {this.studies()}
                
                <button onClick={this.addStudies} className='add'> Add Experience </button>
            </div>
            
        )
    }
}





export default Work