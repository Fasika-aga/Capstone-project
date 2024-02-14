import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import GemstoneList from './components/GemstoneList';
import GemstoneDetail from './components/GemstoneDetail';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={GemstoneList} />
          <Route path="/gemstones/:id" component={GemstoneDetail} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
