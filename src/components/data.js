import React from "react";
import './components.css'

class Data extends React.Component {
    constructor(props){
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
    }

    /* updateData = (e) => {
        let illo = e.target.id.toLowerCase()
        let illa = e.target.value
        this.setState({
            [illo]: illa,
        })
    }

     */
    

    dataFields () {
            return Object.keys(this.state).map((obj, i) => {
                if(i>2){
                return(
                    
                        <input id={obj} key={i} type='text' placeholder={obj[0].toUpperCase() + obj.slice(1)}
                        onChange={this.updateData} ></input>
                        )
            }
            })
        }        

    render(){
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
                    {this.dataFields()}
                </div>
                
            </div>
        )
    }
}

export default Data