import React, { Component } from 'react'

export default class List extends Component {

    state = {

        score : 5,
        data: [{
            id: 1,
            name: "John",
            age: 45
        },
        {
            id: 2,
            name: "Honay",
            age: 34
        }

        ]
    }

    increScore = ()  =>  {
        this.setState({
            score : 10
        })
    }
    render() {
        console.log(this.state.score

        )

        return (

            <div>
                <ul>
                    {this.state.data.map((value, index) => {
                        return (
                            <li key={index}>
                                {value.id} {value.name} {value.age} 
                            </li>

                        );
                    })};
                </ul>
                <button onClick={this.increScore}>Score</button>

            </div>
        )
    }
}
