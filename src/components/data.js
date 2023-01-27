import React, { useState } from "react";
import './components.css'


const Data = () => {
    
    const [state, setState] = useState({

        name: 'Name',
        surname: 'Surname',
        position:'Position',
        city: 'City',
        phone:'Phone',
        email:'Email',
        page:'Page',
    })
    /* constructor(props){
        super(props)
        this.state={
            name: 'Name',
            surname: 'Surname',
            position:'Position',
            city: 'City',
            phone:'Phone',
            email:'Email',
            page:'Page',
        }
    } */

    /* updateData = (e) => {
        let illo = e.target.id.toLowerCase()
        let illa = e.target.value
        this.setState({
            [illo]: illa,
        })
    }

     */
    

    const dataFields = () => {
            return Object.keys(state).map((obj, i) => {
                if(i>2){
                return(
                    
                        <input id={obj} key={i} type='text' placeholder={obj[0].toUpperCase() + obj.slice(1)}></input>
                        )
            }
            })
        }        

        return(
            <div className="data container">
                <div className="top">
                    <input type='text' placeholder='Name'></input>
                    <input type='text' placeholder='Surname'></input>
                </div>
                <div className='subtitle'> 
                    <input type='text' placeholder='Position'></input>
                </div>
                <div className="details">
                    {dataFields()}
                </div>
                
            </div>
        )
}

export default Data