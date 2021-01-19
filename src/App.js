import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state =  {
        persons: [
            { name: 'Inyang', age: 20 },
            { name: 'Ernest', age: 25 },
            { name: 'Imeh', age: 30 }
        ],
        otherState: 'some other value'
    }

    switchNameHandler = (newName) => {
        // console.log("Was clicked");
        this.setState({
            persons: [
                { name: newName, age: 20 },
                { name: 'Ibrahim', age: 25 },
                { name: 'James', age: 100 }
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Inyang Ernest', age: 20 },
                { name: 'Ibrahim', age: 25 },
                { name: event.target.value, age: 26 }
            ]
        })
    }

  render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
      }

    return (
      <div className="App">
          <h1>Hi, i am a React App!</h1>    <p>This is really working!</p>
          <button
              style={style}
              onClick={() => this.switchNameHandler('Bad boy Timz')}>Switch Name</button>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}/>
          <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age} />
          <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              click={this.switchNameHandler.bind(this, 'Jacob')}
              changed={this.nameChangedHandler} >Hobbies: dancing</Person>
      </div>

    );

   // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'This is a react project!!!'))
  }
}

export default App;
