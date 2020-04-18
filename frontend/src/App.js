import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import  WrappedNavBar  from './navBar';
import  WrappedAbout  from './about'
import  Game  from './Games/tictacgame'
import  Calculator  from './Utils/calculator'
import  Eyes  from './eyes'
import  TakeBall  from './Games/takeBall'
import  CustomersList from './Utils/CustomersList'
import  CustomerCreateUpdate  from './Utils/CustomerCreateUpdate'
import  RobotSunny  from './robotSunny'
import  TimeShow from './timeShow'

import  { Provider } from 'react-redux'
import  { applyMiddleware, createStore, compose } from 'redux'
import  { composeWithDevTools } from 'redux-devtools-extension'
import  { rootReducer } from './redux/rootReducer'
import  { connect, provider } from 'react-redux'
import  thunk from 'redux-thunk'
import  logger from 'redux-logger'

import './index.css';
import './css/App.css';
import './css/tictac.css';
import './css/calculator.css';
import './css/eyes.css';
import './css/takeBall.css';
import './css/about.css';
import './css/robotSunny.css';

import {
  multilanguage,
  changeLanguage,
  loadLanguages
} from "redux-multilanguage";


const NaVLayout = () => (
  <div>
    <div className="cont-eyes">
      <Route exact component={Eyes} />
    </div>
    <div>  
      <Route path="/:id" component={WrappedNavBar}/>
    </div>
  </div>
)
const store = createStore(rootReducer,   
    composeWithDevTools(
    applyMiddleware(thunk, logger)))

const BaseLayout = () => (


    <div className="container contents">
      <Route path="/about" exact component={WrappedAbout} />
      <Route path="/minigames/" exact component={TakeBall} />
      <Route path="/utils/" exact component={CustomersList} />
      <Route path="/sunny/" exact component={RobotSunny} />

      <Route path="/minigames/tictacgame/" exact component={Game} />
      <Route path="/utils/calculator/" exact component={Calculator} />
      <Route path="/minigames/takeballgame/" exact component={TakeBall} />
      <Route path="/utils/customers/" exact component={CustomersList} />
      <Route path="/utils/customers/customer/:pk" exact  component={CustomerCreateUpdate} />
      <Route path="/utils/customers/customer" exact component={CustomerCreateUpdate} />
      <Route path="/timeshow" exact component={TimeShow} />

    </div>

)

class App extends Component {
  render() {
    return (
  <Provider store={store}>
    <BrowserRouter>
      <NaVLayout />
      <BaseLayout/>
    </BrowserRouter>
  </Provider>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return state;
}

const WrappedApp = connect(mapStateToProps)(multilanguage(App));

export default WrappedApp;


