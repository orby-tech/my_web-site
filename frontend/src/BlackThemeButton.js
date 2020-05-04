import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import solar from "./img/solar.svg"
import solar_yellow from "./img/solar_yellow.svg"
import {
  multilanguage
} from "redux-multilanguage";
import  { changeTheme } from './redux/actions'
import  { connect } from 'react-redux'


class BlackTheme extends Component {
  constructor(props) {
	  super(props);
	  this.state = {
	  	dark: this.props.theme
	  }
 	  this.themeClick = this.themeClick.bind(this);
  };
  componentDidMount(){
    if(!this.props.theme){
      document.getElementById("navBar").classList.toggle("blackTheme");
      document.body.classList.toggle("blackTheme");
    }
  }
  themeClick() {
    if(document.getElementById("navBar").classList.contains("blackTheme") !== this.props.theme){
      document.getElementById("navBar").classList.toggle("blackTheme");
      document.body.classList.toggle("blackTheme");
    }
    this.props.dispatch(changeTheme());
  }
  render() {
  	let solar_img = this.props.theme
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
const mapStateToProps = (state) => {
  return { 
    theme: state.theme
  };
}

const WrappedBlackTheme = connect(mapStateToProps)(multilanguage(BlackTheme));
export default WrappedBlackTheme
