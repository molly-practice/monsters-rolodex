import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  // only this component is aware of the local state
  // constructor method is available on all class components
  constructor() {
    super(); // super calls Component's constructor method

    this.state = { // this.state is always a json object
      // showing how you can hard code state, but you'll pretty much always get your data from an api
      monsters: [
        {
          name: 'Linda',
          id: '1'
        },
        {
          name: 'Frank',
          id: '2',
        },
        {
          name: 'Jacky',
          id: '3',
        },
        {
          name: 'Molly',
          id: '4',
        }
      ]
    };
  }
  
  render(){
    return (
      <div className="App">
        {
          // .map iterates over your array and gives you back a new array
          // rn we have an array of json objects, we want an array of html elements with the monsters names
          // for .map parameters, you give it a callback function where the callback functions parameter has an array element
          // then .map iterates through and invokes your function on each element 
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
