import React, { Component } from 'react';

class Calculator extends Component {
	  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
  	if (event.target.value==="C"){
  		this.setState({value: ""});
  	} else if (event.target.value===" = "){
  		var arrayOfStrings = this.state.value.split(" ");
  		while (arrayOfStrings.indexOf("*") !== -1) {
  			let i = arrayOfStrings.indexOf("*");
  			arrayOfStrings[i - 1] *= arrayOfStrings[i + 1];
  			arrayOfStrings.splice(i, i + 1);
  		}
  		while (arrayOfStrings.indexOf("/") !== -1) {
  			let i = arrayOfStrings.indexOf("/");
  			arrayOfStrings[i - 1] /= arrayOfStrings[i + 1];
  			arrayOfStrings.splice(i, i + 1);
  		}
  		while (arrayOfStrings.indexOf("+") !== -1) {
  			let i = arrayOfStrings.indexOf("+");
  			arrayOfStrings[i - 1] = parseFloat(arrayOfStrings[i - 1]) + parseFloat(arrayOfStrings[i + 1]);
  			arrayOfStrings.splice(i, i + 1);
  		}
  		while (arrayOfStrings.indexOf("-") !== -1) {
  			let i = arrayOfStrings.indexOf("-");
  			arrayOfStrings[i - 1] = parseFloat(arrayOfStrings[i - 1]) - parseFloat(arrayOfStrings[i + 1]);
  			arrayOfStrings.splice(i, i + 1);
  		}
	  	this.setState({value: arrayOfStrings[0]});	

  	} else{
    	this.setState({value: this.state.value + event.target.value});
  	}
  }

	render() {
		return(
			<div className="calculator">
				<div className="display calculator">
					<input className="dis" autocomplete="off" value={this.state.value}/> 
				</div>
				<div className="block_of_buttons">
					<input type="button" onClick={this.handleChange} id="button1" value="1" />
					<input type="button" onClick={this.handleChange} id="button1" value="2" />
					<input type="button" onClick={this.handleChange} id="button1" value="3" />
					<input type="button" onClick={this.handleChange} id="button1" value=" + " />
					<input type="button" onClick={this.handleChange} id="button1" value="4" />
					<input type="button" onClick={this.handleChange} id="button1" value="5" />
					<input type="button" onClick={this.handleChange} id="button1" value="6" />
					<input type="button" onClick={this.handleChange} id="button1" value=" - " />
					<input type="button" onClick={this.handleChange} id="button1" value="7" />
					<input type="button" onClick={this.handleChange} id="button1" value="8" />
					<input type="button" onClick={this.handleChange} id="button1" value="9" />
					<input type="button" onClick={this.handleChange} id="button1" value=" / " />
					<input type="button" onClick={this.handleChange} id="button1" value="C" />
					<input type="button" onClick={this.handleChange} id="button1" value="0" />
					<input type="button" onClick={this.handleChange} id="button1" value="." />
					<input type="button" onClick={this.handleChange} id="button1" value=" * " />
		      <input type="button" onClick={this.handleChange} id="button"  value=" = " />
				</div>

			</div>

			)
	}

}
export default Calculator;