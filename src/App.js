import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'daniel from state'
  }
  

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});

  }
  
  render() {
    return (
      <div className="App">
         <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          {/* /* folders created */}
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          {/* input and 2 p tag is created */}
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          {/* app.js de created tags are imported */}
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          {/* userName="Daniel" passed as props */}
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          {/* state are just properties of class, so state in app file */}
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          {/* usernameChangedHandler() added to solve */}
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          {/* usernameChangedHandler passed input tag via props*/}
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          {/* completed by doing previous one, setState has do it */}
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          {/* value is added to userinput.js and 2nd input added to app.js*/}
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
          {/* inline style will written for input.js */}
          {/*  adding css file for output style*/}
        </ol>
        <UserInput 
        changed = {this.usernameChangedHandler}/>
        <UserInput 
        changed = {this.usernameChangedHandler}
        currentName={this.state.username}/>
        <UserOutput userName="Daniel" />
        <UserOutput userName="Daniel" />
        <UserOutput userName={this.state.username} />

      </div>
    );
  }
}

export default App;
