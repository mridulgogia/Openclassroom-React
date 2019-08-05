import React from 'react';
import Products from './products';

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
        <Products />
      </div>
    )
  }
}

export default App;
