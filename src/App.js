import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  // only this component is aware of the local state
  // constructor method is available on all class components
  constructor() {
    super(); // super calls Component's constructor method

    this.state = { // this.state is always a json object
      name: {firstName: 'Booboo', lastName: 'Doodoo'},
      company: 'Your Face'
    }
  }
  
  render(){
    // when react looks through the html and sees {}, it knows we want to access a js variable
    // whenever one of these variables change, react will re render this chunk of code that the variable is in
    
    // react lets you bind event handlers onto any html element
    // react updates the object when state is a completely different object in memory
    // if you just update a value in the current object, it wont re render
    // the set state method creates a new object with updated value(s) so that react knows to re render
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}</p> 
          <button 
            onClick={() => {
              this.setState(
                (state, props) => {
                  return {
                    name: {firstName: 'Molly', lastName: 'Novash'},
                  };
                },
                () => {
                  console.log(this.state);
                }
              );
          }}
        >
          Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
