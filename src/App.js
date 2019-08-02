import React from 'react';
import Clock from './clock';

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
        </p>   <Clock />
      </div>
    )
  }
}

export default App;
