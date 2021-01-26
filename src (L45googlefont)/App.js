import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/card-list/searchbox/search-box.component';

class App extends Component {
  constructor (){
    super ();

    this.state = {
      monsters: [],
      searchField: '',
    };

    // when you use ARROW FUNC. that is ES6, no more need with BIND method for class based
    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));

  }

  handleChange= (e) => {
    this.setState({ searchField: e.target.value});

  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
          <SearchBox
            placeholder='search monster'
            handleChange={this.handleChange}

          />
        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}

export default App;
