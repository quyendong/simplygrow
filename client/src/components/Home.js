import React, { Component } from 'react'
import {Jumbotron, Button, Grid} from 'react-bootstrap'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
    <div>
    <Grid>
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
        <Button bsStyle="primary" bsSize="small"> Search </Button>
      </form>
      <br>
      </br>
      <h3> |- Filler Stuff -| </h3>
      <h3> Still Fillin </h3>
      <h3> Like A Dump Truck </h3>
      <h3> Dumpin Dumpin </h3>
      <h3> Like A </h3>
      <h3> Dumptruck </h3>
      <h3> Lord Content of the continent of uselessness </h3>
    </div>
    </Grid>
  </div>
    )
  }
}

/*
<Link to="/enter">
  <Button bsStyle="primary">Login</Button>
</Link>
*/
