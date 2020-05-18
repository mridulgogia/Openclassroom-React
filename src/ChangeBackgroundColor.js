import React, {Component} from 'react';
import ChangeBttn from "./changeBttn";

export default class ChangeBackgroundColor extends Component{
    constructor(props){
        super(props);
        this.state = {
            color: 'red'
        }
        this.updateColor = this.updateColor.bind(this)
    } 
       
    updateColor(){
        this.setState( (prevState, props) => {
                return { color: prevState.color === 'red' ? 'blue' : 'red'};
        })
    };
    

    render(){
        return (
            <div>
                <div style={{height: '200px', width: '200px', backgroundColor: this.state.color}} >
                    <ChangeBttn onClick = {this.updateColor} />
                </div>
            </div>
        )
    }
}