import React, { Component, Suspense } from 'react';

import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';


import  { Provider } from 'react-redux'
import  { applyMiddleware, createStore, compose } from 'redux'
import  { rootReducer } from './redux/rootReducer'
import  thunk from 'redux-thunk'
import  { composeWithDevTools } from 'redux-devtools-extension'
import  logger from 'redux-logger'
import  { connect, provider } from 'react-redux'

import  { aboutInfo, aboutContacts } from './redux/actions'


const store = createStore(rootReducer,   
    composeWithDevTools(
    applyMiddleware(thunk, logger)
  ))

function TitleComponent() {
  return <h1>About me and this progect</h1>
}



class About extends Component{
  constructor(props) {
	  super(props);
	  this.infoClick = this.infoClick.bind(this);
 	  this.contactsClick = this.contactsClick.bind(this);
  };


  infoClick() {
  	this.props.dispatch(aboutInfo())
  };

  contactsClick() {
    this.props.dispatch(aboutContacts())
  };

	render(){
		const infoStyle = this.props.aboutInfo === true ? 'moreInformation show' : 'moreInformation unShow';
  	const contactsStyle = this.props.aboutContacts ? 'moreInformation show' : 'moreInformation unShow';
    console.log(this.props)


		return(
			<div className="container">
				<Suspense fallback="loading">
					<TitleComponent />
				</Suspense>

				<h4> It's progect is site-portfolio</h4>
				<p> 
						I testing my ideas and fitces in this web-site.
						It's created with React/Redux and Django-REST.
				</p>
				<Button  className="" variant='outline-primary' onClick={this.infoClick}>
					More information
      	</Button>
      	<div className={infoStyle}>
      		<ul>
      			<li>Back-end: Python3, Django-REST</li>
      			<li>Front-end: React/Redux</li>
            <li>API: with JWT token</li>
      		</ul>
      	</div>

				<hr/>

				<h4> Me </h4>
				<p> 
						I like work, I can create. <br/>						
						More than three years ago, I started learning C#, but it was unsuccessful. <br/><br/>
						Now I work with Python and React
				</p>
				<Button  className="" variant='outline-primary' onClick={this.contactsClick}>
					Contacts 
      	</Button>
      	<div className={contactsStyle}>
      		<ul>
      			<li><a href="https://t.me/orby_tech"> Telegram: </a> @orby_tech </li>
      			<li><a href="https://github.com/orby-tech"> github: </a> orby_tech </li>
      			<li><a href="https://www.linkedin.com/in/timur-bondarenko-2625801a6/">linkedin </a> </li>
	     			<li><a href="https://vk.com/orbon"> vk </a> </li>

      			<li><a href="mailto:tibode495@gmail.com"> e-mail: </a> tibode495@gmail.com </li>

      		</ul>
      	</div>

			</div>
		);
	}
}

const mapStateToProps = (state) => {
  console.log(state)
  return { 
    aboutInfo: state.aboutInfo,
    aboutContacts: state.aboutContacts
  };
}

const WrappedAbout = connect(mapStateToProps)(About);

export default WrappedAbout;
