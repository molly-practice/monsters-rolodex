import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  // only this component is aware of the local state
  // constructor method is available on all class components
  constructor() {
    super(); // super calls Component's constructor method

    this.state = { // this.state is always a json object
      monsters: [],
      searchField: ''
    };
    //console.log('constructor');
  }

  // this is a method from the Component class that gets run when a component mounts
  // mounting is the first time a component gets rendered to the DOM. it only happens once
  // the only way a component can get remounted, is if it's first unmounted, ie completely removed from the DOM
  // at that point, its basically a different component ie a new instance of it

  // the moment a component gets mounted onto the dom is when you want to make an api request,
  // because you want it to display all of the data right away
  componentDidMount() {
    // console.log('component did mount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      },
      () => {
        // console.log(this.state);
      }
      ));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }
  
  render(){
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder='search monsters'
          className='search-box'
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
