import React, {Component} from 'react';

export default class Clock extends Component{
    constructor(props){
        super(props);

        this.state ={ 
            date: new Date().toLocaleTimeString()
        };
    }

    componentDidMount(){
       this.intervalID =  setInterval(
            () => { this.tick() }, 1000 );
    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
    tick(){
        this.setState({
            date: new Date().toLocaleTimeString()
        });
    }
    render(){
        return (
            <div>   
                <p>
                    The time is {this.state.date}.
                </p>
            </div>
        );
    }
}