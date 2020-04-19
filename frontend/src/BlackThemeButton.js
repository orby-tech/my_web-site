import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import solar from "./img/solar.svg"
import solar_yellow from "./img/solar_yellow.svg"
import {
  multilanguage
} from "redux-multilanguage";

class BlackTheme extends Component {
  constructor(props) {
	  super(props);
	  this.state = {
	  	dark: true
	  }
 	  this.themeClick = this.themeClick.bind(this);
  };

  themeClick() {
    document.body.classList.toggle("blackTheme");
    document.getElementById("navBar").classList.toggle("blackTheme");
    // document.li.toggle("blackTheme")
        console.log(this.state.dark);
    this.setState = ({dark: !this.state.dark});
    console.log(this.state.dark);

  }
  render() {
  	let solar_img = this.state.dark
  									? solar
  									: solar_yellow
    return (
    	<img  src={solar_img} 
    				className="changeTheme" 
    				alt="change theme"  
    				onClick={this.themeClick}/>


    )
  }
}
export default BlackTheme