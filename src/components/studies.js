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
                                               
                            {if(i<5){
                               return (
                                    <input key={i} placeholder={obj[0][0].toUpperCase() + obj[0].slice(1)} className={obj[0] + ' study'} value={obj[1]} onChange={this.updateStudies}></input>
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
            <div className="studies container">
                <h5>Studies</h5>
                
                {this.studies()}
                
                <button onClick={this.addStudies} className='add'> Add Studies </button>
            </div>
            
        )
    }
}





export default Studies