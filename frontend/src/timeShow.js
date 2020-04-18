import React, { Component } from 'react';

import './css/timeShow.css';

function Square(props) {
	let view = props.value != 1
					? "time_block"
					: "time_block selected"
	let view_info = props.value === 1
	? "time_info"
	: "time_info_nodisplay"
  return (
	  <>
	  	<div className={view_info} >
	  	<p className="time_str">9:00</p>
	  	<p className="time_str">11:00</p>
	  	<p className="time_str">13:00</p>
	  	<p className="time_str">15:00</p>
	  	<p className="time_str">17:00</p>
	  	<p className="time_str">19:00</p>
	  	<p className="time_str">21:00</p>

	  	</div>
	    <div className={view} 
	      	 onClick={props.onClick}
	      />
		</>
  );
}

class TimeShow extends React.Component {
	renderTimeBlock(i) {
    return <Square 
      value={this.props.squares[i]} 
      onClick={() => this.props.onClick(i)}
      />;
  }
	render(){
		return(
			<div className="time_board">
				{this.renderTimeBlock(0)}
				{this.renderTimeBlock(1)}
				{this.renderTimeBlock(2)}
				{this.renderTimeBlock(3)}
				{this.renderTimeBlock(4)}
				{this.renderTimeBlock(5)}
				{this.renderTimeBlock(6)}
			</div>
		)
	}
}

class Table extends React.Component {
	constructor(props){
		let arr = Array(7).fill(null)
		arr[0] = 1;
		super(props);
		this.state = {
			squares: arr
		}
	}

	handleClick(i) {
		let arr = Array(7).fill(null)
		arr[i] = 1;
		this.setState({
			squares: arr
		})
	}
	render(){
		let status
		if(this.state.squares[0] === 1) {
			status = "today"
		} else if(this.state.squares[1] === 1) {
			status = "tommorow"
		} else {
			status = "day"
		}
		return(
			<>
				<div className="status_time">
					{status}
				</div>

		    <TimeShow 
			    squares={this.state.squares}
			    onClick={(i) => this.handleClick(i)}
			  />
		  </>
	  )
	}
}

export default Table;