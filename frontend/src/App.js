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
import  WrappedTimeShow from './timeShow'
import  WrappedBlackTheme from './BlackThemeButton'

import  { Provider } from 'react-redux'
import  { applyMiddleware, createStore } from 'redux'
import  { composeWithDevTools } from 'redux-devtools-extension'
import  { rootReducer } from './redux/rootReducer'
import  { connect } from 'react-redux'
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
import './css/dark.css';

import {
  multilanguage
} from "redux-multilanguage";


const NaVLayout = () => (
  <div>
      <Route exact component={Eyes} />
      <Route exact component={WrappedBlackTheme} />
      <Route path="/:id" component={WrappedNavBar}/>

  </div>
)

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}

const store = createStore(rootReducer,
    persistedState,   
    composeWithDevTools(
    applyMiddleware(thunk, logger)))

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

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
      <Route path="/timeshow" exact component={WrappedTimeShow} />

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
  return state;
}

const WrappedApp = connect(mapStateToProps)(multilanguage(App));

export default WrappedApp;


