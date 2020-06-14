import React from 'react';
import './App.css';
import Welcome from './Welcome'
import Todo from './todo/Todo'
function App() {
  return (
    <div className="App">
      <Welcome name="karim"/>
      <Todo/>
    </div>
  );
}

export default App;
