import React, {Component} from 'react'
import Person from './Person/Person'

class Persons extends Component {

    constructor (props) {
        super(props)
        console.log('[Persons.js] Inside constructor', props)
    }

    componentWillMount () {
        console.log('[Persons.js] Inside componentWillMount')
    }

    componentDidMount () {
        console.log('[Persons.js] Inside componentDidMount')
    }

    componentWillReceiveProps (nextProps) {
        console.log(
            '[UPDATE Persons.js] Inside componentWillReceiveProps',
            nextProps
        )
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log(
            '[UPDATE Persons.js] Inside shouldComponentUpdate',
            nextProps,
            nextState
        )
        return true
    }

    componentWillUpdate (nextProps, nextState) {
        console.log(
            '[UPDATE Persons.js] Inside componentWillUpdate',
            nextProps,
            nextState
        )
    }

    componentDidUpdate () {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate')
    }

    render () {
        console.log('[Persons.js] Inside render')
        return this.props.persons.map((p, i) => {
            return <Person
                click={() => this.props.clicked(i)}
                name={p.name}
                age={p.age}
                key={p.id}
                changed={(event) => this.props.changed(event, p.id)}
            />
        })
    }
}

export default Persons