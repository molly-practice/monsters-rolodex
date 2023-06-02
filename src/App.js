// import { Component } from 'react';
import { useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); // useState gives us two values that we can destructure- the value we want to store, and a setter function. on the left is where we name these things
  console.log({ searchField });

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder='search monsters'
        className='monsters-search-box'
      />
    </div>
  );
}

// class App extends Component {
//   // only this component is aware of the local state
//   // constructor method is available on all class components
//   constructor() {
//     super(); // super calls Component's constructor method

//     this.state = { // this.state is always a json object
//       monsters: [],
//       searchField: ''
//     };
//     //console.log('constructor');
//   }

//   componentDidMount() {
//     // console.log('component did mount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return {monsters: users}
//       },
//       () => {
//         // console.log(this.state);
//       }
//       ));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   }
  
//   render(){
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     })

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox 
//           onChangeHandler={onSearchChange} 
//           placeholder='search monsters'
//           className='monsters-search-box'
//         />
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
