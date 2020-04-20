import React from 'react';
import { Navbar } from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { TodoPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';



const App:React.FC = () => {

  return (
    <Router>
        <div className="app">
            <Navbar />
            <div className="container">
              <Switch>
                <Route component={TodoPage} path='/' exact />
                <Route component={AboutPage} path="/about" />
              </Switch>
            </div>
        </div>
    </Router>
    
  )
}

export default App;
