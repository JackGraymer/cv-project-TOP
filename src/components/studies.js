import React from "react";
import './components.css'
import { useState } from "react";

const Studies = () => {
    const [state, setState] = useState({
        study: [
            {
                title: '',
                university:'',
                place: '',
                from: '',
                to: '',
                id: crypto.randomUUID()
            }, 
        ]
    })

    const addStudies = () => {
        setState(prevState => ({
            study: [...prevState.study, {...state.study[0],title: '',university:'', place: '', from: '', to: '' ,id: crypto.randomUUID()}, ]
          }))
    }

    const deleteStudies = (e) => {
        if(state.study.length >1){
            let newState = state.study.filter(a => a.id !== e.target.parentNode.id)
            setState({
                study: newState
            })
        }
    }

    const updateStudies = (e, id) => {
        setState({
            ...state,
            study: state.study.map((input) => 
                e.target.parentNode.id === input.id? {...input, [e.target.classList[0]] : e.target.value}: input
            )
        })
    }

    const studies = () => {
            return(
                state.study.map((obj,i)=> (
                    <div id={obj.id} key={i}>
                        {Object.entries(obj).map((obj,i) => 
                                               
                            {if(i<5){
                               return (
                                    <input key={i} placeholder={obj[0][0].toUpperCase() + obj[0].slice(1)} className={obj[0] + ' study'} value={obj[1]} onChange={updateStudies}></input>
                                )
                                }
                            }    
                        )}
                       <button className="del" onClick={deleteStudies}>Delete</button>
                    </div>
                ))             
            )            
    }

    return(
        <div className="studies container">
            <h5>Studies</h5>
            
            {studies()}
            
            <button onClick={addStudies} className='add'> Add Studies </button>
        </div>
        
    )
}

export default Studies