import React from "react";
import './components.css'
import { useState } from "react";

const Work = () => {
    const[state, setState] = useState({
        work: [
            {
                role: '',
                company:'',
                place: '',
                from: '',
                to: '',
                duty:'',
                id: crypto.randomUUID()
            }, 
        ]
    })

    const addStudies = () => {
        setState(prevState => ({
            work: [...prevState.work, {...state.work[0],role: '',company:'', place: '', from: '', to: '' , duty:'', id: crypto.randomUUID()}, ]
          }))
    }

    const deleteStudies = (e) => {
        if(state.work.length >1){
            let newState = state.work.filter(a => a.id !== e.target.parentNode.id)
            setState({
                work: newState
            })
        }
    }

    const updateStudies = (e, id) => {
        setState({
            ...state,
            work: state.work.map((input) => 
                e.target.parentNode.id === input.id? {...input, [e.target.classList[0]] : e.target.value}: input
            )
        })
    }

    const studies = () => {
            return(
                state.work.map((obj,i)=> (
                    <div id={obj.id} key={i}>
                        {Object.entries(obj).map((obj,i) => 
                                               
                            {if(i<6){
                               return (
                                    <input type='text' key={i} placeholder={obj[0][0].toUpperCase() + obj[0].slice(1)} className={obj[0] + ' work'} value={obj[1]} onChange={updateStudies}></input>
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
        <div className="experience container">
            <h5>Experience</h5>
            
            {studies()}
            
            <button onClick={addStudies} className='add'> Add Experience </button>
        </div>
        
    )
}

export default Work