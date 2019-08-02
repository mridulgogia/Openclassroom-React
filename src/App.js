import React from 'react';
import EventLA from './Event';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      name: "Mridul Gogia"
    }
  }

  render(){
    return (
      <div>
        <p>
          Hi {this.state.name}! 
        </p> <EventLA />
      </div>
    )
  }
}

export default App;
