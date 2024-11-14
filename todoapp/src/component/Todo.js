import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class Todo extends Component {

    render() {
        return (
            <div>
                <h1>Welcome Todo app

                </h1>
                <h1>{this.props.myString}</h1>

            </div>
        )
    }
}

export default Todo;
