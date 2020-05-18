import React ,{Component} from 'react';

export default class EventLA extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: 'click me'
        }
    }
    updateClick = (event) => {
        console.log(this);
        this.setState({
            text: 'foo'
        });
    }
    render(){
        return (
            <div>
                <button onClick= {this.updateClick}> {this.state.text}</button>
            </div>
        )
    }
}
