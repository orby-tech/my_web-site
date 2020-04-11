import React, { Component } from 'react';

class TakeBall extends Component {
  handleClick(e) {
    e.preventDefault();
    alert("YOU WIN");
  }

	render() {
		return(
			<div>
				<div className="area-of-ball" id="area" >
					<div onClick={this.handleClick} className="ball" />
				</div>
			</div>
		);
	}
}

export default TakeBall;