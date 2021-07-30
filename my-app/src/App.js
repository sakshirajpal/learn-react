import React from "react";
import "./App.css";
import Header from "./components/Header";
import Task from "./components/Task";

function App() {
  return (
    <div className='container'>
      <Header title='Hoola Hoop' />
      <Task></Task>
    </div>
  );
}

/*class App extends React.Component {
  render() {
    return <h1>Hello from Class</h1>
  }
}*/

export default App;
