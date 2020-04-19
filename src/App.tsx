import React from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';


const App:React.FC = () => {
  return (
    <div className="app">
        <Navbar />
        <div className="container">
          <TodoForm />
        </div>
    </div>
  )
}

export default App;
