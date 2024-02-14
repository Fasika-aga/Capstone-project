import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter, Route, Switch
import GemstoneList from './components/GemstoneList';
import GemstoneDetail from './components/GemstoneDetail';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={GemstoneList} />
          <Route path="/gemstones/:id" component={GemstoneDetail} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));



  
