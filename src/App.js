import React from 'react';
import ChangeBackgroundColor from './ChangeBackgroundColor';

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
        </p> 
        <ChangeBackgroundColor />
      </div>
    )
  }
}

export default App;
