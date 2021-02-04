import React, { Component } from 'react';
import classes from  './App.css';
import Person from './Person/Person';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";


class App extends Component {


    state = {
        persons: [
            {id: 'a1', name: 'Bellion', age: 45},
            {id: 'a2', name: 'Justice', age: 26},
            {id: 'a3', name: 'Jon', age: 33}
        ],
        otherState: 'some other values',
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        })
        const person = {
            ...this.state.persons[personIndex]
        // or const person = object.assign({}, this.state.persons[personIndex])
        }
        person.name = event.target.value;

        const persons = [...this.state.persons]
        persons[personIndex] = person

        this.setState({persons: persons})
    }


    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice()
        const persons = [ ...this.state.persons]
        persons.splice(personIndex, 1)
        this.setState({persons: persons})
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons
        this.setState({showPersons: !doesShow});

    }





    render() {
        let btnClass = '';

        let assignedClasses = []
        if (this.state.persons.length <= 2){
            assignedClasses.push(classes.red)
        }
        if (this.state.persons.length <= 1){
            assignedClasses.push(classes.bold)
        }


        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index)  => {
                        return <ErrorBoundary key={person.id}> <Person
                                click={this.deletePersonHandler.bind(this, index)}
                                name={person.name}
                                age={person.age}

                                changed={(event) => this.nameChangedHandler(event, person.id )} />
                        </ErrorBoundary>
                    })}
                </div>
            )
            btnClass = classes.Red


        }

        return (

                <div className={classes.App}>
                    <h1>Hi, i am a React app!!!!!!!!</h1>
                    <p className={assignedClasses.join(' ')}>This is working</p>

                    <button
                        className={btnClass}
                        onClick={this.togglePersonHandler} >submit
                    </button>
                    {persons}
                </div>

        );
    }
}

export default App;
