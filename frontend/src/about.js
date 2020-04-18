import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';

import {
  multilanguage,
  loadLanguages
} from "redux-multilanguage";

import  { connect } from 'react-redux'

import  { aboutInfo, aboutContacts } from './redux/actions'



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

  componentDidMount() {
    this.loadLanguages();
  }


  loadLanguages() {
    this.props.dispatch(loadLanguages({
        languages: {
          en: require("./languages/en.json"),
          ru: require("./languages/ru.json")
        }
      })
    );
  }


	render(){
		const infoStyle = this.props.aboutInfo === true ? 'moreInformation show' : 'moreInformation unShow';
  	const contactsStyle = this.props.aboutContacts ? 'moreInformation show' : 'moreInformation unShow';

    const { strings } = this.props;

		return(
			<div className="container">
				<h1>{strings["aboutTitle"]}</h1>

				<h4> {strings["aboutProgectTitle"]} </h4>
				<p> {strings["aboutProgectText"]}</p>
				<Button  className="" variant='outline-primary' onClick={this.infoClick}>
					{strings["aboutProgectButton"]}
      	</Button>
      	<div className={infoStyle}>
      		<ul>
      			<li>Back-end: Python3, Django-REST</li>
      			<li>Front-end: React/Redux</li>
            <li>API: with JWT token</li>
      		</ul>
      	</div>

				<hr/>

				<h4> {strings["aboutMeTitle"]} </h4>
				<p> 
						{strings["aboutMeText_0"]} <br/>						
						{strings["aboutMeText_1"]} <br/><br/>
						{strings["aboutMeText_2"]}
				</p>
				<Button  className="" variant='outline-primary' onClick={this.contactsClick}>
					{strings["aboutMeButton"]} 
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
  return { 
    aboutInfo: state.aboutInfo,
    aboutContacts: state.aboutContacts
  };
}

const WrappedAbout = connect(mapStateToProps)(multilanguage(About));

export default WrappedAbout;
