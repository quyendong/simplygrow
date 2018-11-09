import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import PlantList from './components/PlantList';
import Home from './components/Home';
import { Jumbotron } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/PlantList" component={PlantList} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
