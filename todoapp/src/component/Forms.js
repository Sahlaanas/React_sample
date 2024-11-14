import React, { Component } from 'react'

export default class Forms extends Component {
     constructor (props) {
        super(props);

        this.state = {
            firstName : " ",
            lastName  : " "
        }

        this.inputOne = React.createRef();
        this.inputTwo = React.createRef();

     }



    onhandleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    onSubmit = () => {
        console.log(this.inputOne.value);
        console.log(this.inputTwo.value);
        
        
    } 
    
    render() {
        return (
            <form>
                <input name='firstName' type="text"  ref={input => (this.inputOne = input)} />
                <input name='lastName' type="text" ref={input => (this.inputTwo = input)}/>

                <button type = "button" onClick={this.onSubmit}>Submit</button>
            </form>

        )
    }
}
