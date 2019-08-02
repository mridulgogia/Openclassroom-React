import React, {Component} from 'react';

export default class changeBttn extends Component{
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        console.log('click');
        this.props.onClick();
    }

    render(){
        return (
            <div>
                <button onClick= {this.clickHandler}>
                    Click me to change Color
                </button>
            </div>
        )
    }
}