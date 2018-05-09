import React, { Component } from 'react'
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Auxiliary from '../highOrderComponents/Auxiliary'
import withClass from '../highOrderComponents/withClass'

class App extends Component {

    constructor (props) {
        super(props)
        console.log('[App.js] Inside constructor', props)

        this.state = {
            persons: [
                { id: 'asdklfasd', name: 'Max', age: 28 },
                { id: 'dslfjasld', name: 'Manu', age: 29 },
                { id: 'asdijfasd', name: 'Stephanie', age: 26 },
            ],
            showPersons: false,
            toggleClicked: 0
        }
    }

    componentWillMount () {
        console.log('[App.js] Inside componentWillMount')
    }

    componentDidMount () {
        console.log('[App.js] Inside componentDidMount')
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log(
            '[UPDATE App.js] Inside shouldComponentUpdate',
            nextProps,
            nextState
        )
        return true
    }

    componentWillUpdate (nextProps, nextState) {
        console.log(
            '[UPDATE App.js] Inside componentWillUpdate',
            nextProps,
            nextState
        )
    }

    componentDidUpdate () {
        console.log('[UPDATE App.js] Inside componentDidUpdate')
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
        this.setState((prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1 
            }
        })
    }

    render () {
        console.log('[App.js] inside render')
        let persons = null

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}
            />
        }

        return (
            <Auxiliary>
                <button onClick={() => this.setState({showPersons: true})}>
                    Show Persons
                </button>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </Auxiliary>
        )
    }
}

export default withClass(App, classes.App)