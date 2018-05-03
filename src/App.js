import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { id: 'asdklfasd', name: 'Max', age: 28 },
            { id: 'dslfjasld', name: 'Manu', age: 29 },
            { id: 'asdijfasd', name: 'Stephanie', age: 26 },
        ],
        showPersons: false
    }

    nameChangeHandler = (event, id) => {
        const i = this.state.persons.findIndex(p => {
            return p.id === id
        })
        const person = {...this.state.persons[i]}
        const persons = [...this.state.persons]

        person.name = event.target.value

        persons[i] = person

        this.setState({persons})
    }

    deletePersonHandler = (i) => {
        const persons = [...this.state.persons]
        persons.splice(i, 1)
        this.setState({persons})
        
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons
        this.setState({showPersons: !doesShow})
    }

    render () {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1x solid blue',
            padding:'8px',
            cursor: 'pointer'
        }

        let persons = null

        if (this.state.showPersons) {
            persons = (
                <div>{
                    this.state.persons.map((p, i) => {
                    return <Person
                        click={() => this.deletePersonHandler(i)}
                        name={p.name}
                        age={p.age}
                        key={p.id}
                        changed={(event) => this.nameChangeHandler(event, p.id)}
                        />
                    })
                }</div>
            )
            style.backgroundColor = 'red'
        }

        let classes = []
        if (this.state.persons.length <= 2) classes.push('red')
        if (this.state.persons.length <= 1) classes.push('bold')

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>
                    This is really working
                </p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>
                    Toggle Persons!
                </button>
                {persons}
            </div>
        )
    }
}

export default App