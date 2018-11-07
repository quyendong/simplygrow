import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import { Jumbotron, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
          <Jumbotron className="Jumbotron">
            <h1> SimplyGrow </h1>
            <p>
              Insert Cheesy But Oddly Clever Motto Here
            </p>
          </Jumbotron>
        <div className="Body">
          <h4> Our Plant Database is here to meet all needs from the Seasoned Greenthumb to the Budding Sprout </h4>
          <br/>
          <form className="Search-Form">
            <label> Have A Look: </label>
            <input type="input" />
            <Button bsStyle="primary" bsSize="xsmall"> Search </Button>
          </form>

          <br/>
          <br/>
          <h3> |- Filler Stuff -| </h3>
          <h3> Still Fillin </h3>
          <h3> Like A Dump Truck </h3>
          <h3> Dumpin Dumpin </h3>
          <h3> Like A </h3>
          <h3> Dumptruck </h3>
          <h3> Lord Content of the continent of uselessness </h3>

        </div>
      </div>
    );
  }
}

export default App;
