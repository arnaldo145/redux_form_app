import React, { Component } from 'react';
import InitForm from './../components/InitForm'

class App extends Component{
  render(){
    return(
      <div className="col">
        <p>
          <div className="card">
            <div className="card-header">Redux form</div>
            <div className="card-body">
              <div className="card-title">My first Redux Form</div>
              <InitForm></InitForm>
            </div>
          </div>
          <div className="card-footer">
            <p>Card footer</p>
          </div>          
        </p>
    </div>
    );
  }
}

export default App;
