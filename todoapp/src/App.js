// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import Todo from './component/Todo';/
// import Counter from './component/Counter.js';
// import Forms from './component/Forms.js';
import List from './component/List.js';


// function App() {
//   return (
//     <div className="App">
//       <h1>Welcome</h1>

//     </div>
//   );
// }

class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <List />
        {/* <Counter  /> */}
        {/* <Forms /> */}
      </div>
    );
  }
}

export default App;
