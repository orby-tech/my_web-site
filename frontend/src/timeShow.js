import React from 'react';

import './css/timeShow.css';

import {
  multilanguage,
  loadLanguages
} from "redux-multilanguage";
import  { connect } from 'react-redux'


function Square(props) {
	let view = props.value !== 1
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

class Table extends React.Component {
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

class TimeShow extends React.Component {
	constructor(props){
		let arr = Array(7).fill(null)
		arr[0] = 1;
		super(props);
		this.state = {
			squares: arr
		}
	}

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

	handleClick(i) {
		let arr = Array(7).fill(null)
		arr[i] = 1;
		this.setState({
			squares: arr
		})
	}
	render(){
	  const { strings } = this.props;

		let status
		if(this.state.squares[0] === 1) {
			status = strings["today"] + ","
		} else if(this.state.squares[1] === 1) {
			status = strings["tommorow"] + ","
		} else {
			status = " "
		}

		let now = new Date();
		let day;
		let day_for_switch = now.getDay() + this.state.squares.indexOf(1)
		if (day_for_switch > 7) {
			day_for_switch -= 7
		}
		switch(day_for_switch){
				case 0:
				day = strings["Sunday"];
				break;
			case 1:
				day = strings["Monday"];
				break;
			case 2:
				day = strings["Tuesday"];
				break;
			case 3:
				day = strings["Wednesday"];
				break;
			case 4:
				day = strings["Thursday"];
				break;
			case 5:
				day = strings["Friday"];
				break;
			case 6:
				day = strings["Saturday"];
				break;
			case 7:
				day = strings["Sunday"];
				break;
			default: 
				day = 0;
				break;
		}

		return(
			<>
				<div className="status_time">
					{status}  {day}
				</div>

		    <Table 
			    squares={this.state.squares}
			    onClick={(i) => this.handleClick(i)}
			  />
		  </>
	  )
	}
}
const WrappedTimeShow = connect()(multilanguage(TimeShow));

export default WrappedTimeShow;