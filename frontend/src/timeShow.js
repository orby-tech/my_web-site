import React, { Component } from 'react';

import './css/timeShow.css';

function Square(props) {
	let view = props.value != 1
					? "time_block"
					: "time_block selected"
  return (
    <div 
      className={view} 
      onClick={props.onClick}
      >
    </div>
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
		super(props);
		this.state = {
			squares: Array(7).fill(null)
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
		return(
	    <TimeShow 
		    squares={this.state.squares}
		    onClick={(i) => this.handleClick(i)}
		  />
	  )
	}
}

export default Table;