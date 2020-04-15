import React, { Component, Suspense } from 'react';

import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';


function TitleComponent() {
  const { t } = useTranslation();
  return <h1>{t('About me and this progect')}</h1>
}



class About extends Component{
	  constructor(props) {
	  super(props);
	  this.infoClick = this.infoClick.bind(this);
 	  this.contactsClick = this.contactsClick.bind(this);

	    this.state = {
      infoCollapsed: false,
      contactsCollapsed: false
    }
    };


    infoClick() {
    	this.setState({infoCollapsed: !this.state.infoCollapsed});
    };

    contactsClick() {
    	this.setState({contactsCollapsed: !this.state.contactsCollapsed});
    };

	render(){
		const infoStyle = this.state.infoCollapsed ? 'moreInformation show' : 'moreInformation unShow';
  	const contactsStyle = this.state.contactsCollapsed ? 'moreInformation show' : 'moreInformation unShow';


		return(
			<div className="container">
				<Suspense fallback="loading">
					<TitleComponent />
				</Suspense>

				<h4> It's progect is site-portfolio</h4>
				<p> 
						I testing my ideas and fitces in this web-site.
						It's created with React and Django-REST.
				</p>
				<Button  className="" variant='outline-primary' onClick={this.infoClick}>
					More information
      	</Button>
      	<div className={infoStyle}>
      		<ul>
      			<li>Back-end: Python3, Django-REST</li>
      			<li>Front-end: with React</li>
                <li>API: axios</li>


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
export default About;
