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

    updateData = (e) => {
        let illo = e.target.id.toLowerCase()
        let illa = e.target.value
        this.setState({
            [illo]: illa,
        })
    }

    dataFields () {
            return Object.keys(this.state).map((obj, i) => {
                return(                    
                        <input id={obj} key={i} type='text' placeholder={obj[0].toUpperCase() + obj.slice(1)}
                        onChange={this.updateData} ></input>
                )
            })
        }        

    render(){
        return(
            <div>
                {this.dataFields()}
            </div>
        )
    }
}

export default Data