import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';

import  NavBar  from './navBar';
import  About  from './about'
import  Game  from './Games/tictacgame'
import  Calculator  from './Utils/calculator'
import  Eyes  from './eyes'
import  TakeBall  from './Games/takeBall'
import  CustomersList from './Utils/CustomersList'
import  CustomerCreateUpdate  from './Utils/CustomerCreateUpdate'
import  RobotSunny  from './robotSunny'

import './index.css';
import './css/App.css';
import './css/tictac.css';
import './css/calculator.css';
import './css/eyes.css';
import './css/takeBall.css';
import './css/about.css';
import './css/robotSunny.css';


const NaVLayout = () => (
  <div>
    <div className="cont-eyes">
      <Route exact component={Eyes} />
    </div>
    <div>  
      <Route path="/:id" component={NavBar}/>
    </div>
  </div>
)

const BaseLayout = () => (
  <div className="container contents">
    <Route path="/about" exact component={About} />
    <Route path="/minigames/" exact component={TakeBall} />
    <Route path="/utils/" exact component={CustomersList} />
    <Route path="/sunny/" exact component={RobotSunny} />

    <Route path="/minigames/tictacgame/" exact component={Game} />
    <Route path="/utils/calculator/" exact component={Calculator} />
    <Route path="/minigames/takeballgame/" exact component={TakeBall} />
    <Route path="/utils/customers/" exact component={CustomersList} />
    <Route path="/utils/customers/customer/:pk" exact  component={CustomerCreateUpdate} />
    <Route path="/utils/customers/customer" exact component={CustomerCreateUpdate} />
  </div>
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NaVLayout />
        <BaseLayout/>
      </BrowserRouter>
    );
  }
}

export default App;


