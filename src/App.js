import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation'
import Char from "./Char/Char";

class App extends Component {


    // state = {
    //     persons: [
    //         {id: 'a1', name: 'Bellion', age: 45},
    //         {id: 'a2', name: 'Justice', age: 26},
    //         {id: 'a3', name: 'Jon', age: 33}
    //     ],
    //     otherState: 'some other values',
    //     showPersons: false
    // }
    //
    // nameChangedHandler = (event, id) => {
    //     const personIndex = this.state.persons.findIndex(p => {
    //         return p.id === id
    //     })
    //     const person = {
    //         ...this.state.persons[personIndex]
    //     // or const person = object.assign({}, this.state.persons[personIndex])
    //     }
    //     person.name = event.target.value;
    //
    //     const persons = [...this.state.persons]
    //     persons[personIndex] = person
    //
    //     this.setState({persons: persons})
    // }
    //
    //
    // deletePersonHandler = (personIndex) => {
    //     // const persons = this.state.persons.slice()
    //     const persons = [ ...this.state.persons]
    //     persons.splice(personIndex, 1)
    //     this.setState({persons: persons})
    // }
    //
    // togglePersonHandler = () => {
    //     const doesShow = this.state.showPersons
    //     this.setState({showPersons: !doesShow});
    //
    // }

    state = {
        userInput: ''
    }

    inputChangedHandler = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }

    deleteCharHandler = (index) => {
        const text = this.state.userInput.split('')
        text.splice(index, 1)
        const updatedText = text.join('')
        this.setState({userInput: updatedText})
    }

    render() {

        const charList = this.state.userInput.split('').map((ch,index) => {
            return <Char
                character={ch}
                key={index}
                clicked={() => this.deleteCharHandler(index)}/>
        })

        // let persons = null;
        // if (this.state.showPersons) {
        //     persons = (
        //         <div>
        //             {this.state.persons.map((person, index)  => {
        //                 return <Person
        //                     click={this.deletePersonHandler.bind(this, index)}
        //                     name={person.name}
        //                     age={person.age}
        //                     key={person.id}
        //                     changed={(event) => this.nameChangedHandler(event, person.id )} />
        //             })}
        //         </div>
        //     )
        // }
        //
        //
        // const style = {
        //     backgroundColor: 'white',
        //     font: 'inherit',
        //     border: '1px solid blue',
        //     padding: '8px',
        //     cursor: 'pointer'
        // }

        return (
            <div className="App">
                {/*<h1>Hi, i am a React app</h1>*/}

                {/*<button*/}
                {/*    onClick={this.togglePersonHandler}*/}
                {/*    style={style}>submit*/}
                {/*</button>*/}
                {/*{persons}*/}

                <h1>Welcome to React</h1>
                <input
                    type="text"
                    onChange={this.inputChangedHandler}
                    value={this.state.userInput} />
                <p>{this.state.userInput}</p>
                <Validation inputLength={this.state.userInput.length}/>
                {charList}

            </div>
        );
    }
}

export default App;
