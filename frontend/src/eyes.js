import  React, { Component } from  'react';

let lasCoors = [0, 0]
function newCoords (x, y, bt, bl, ballt, balll, lasCoors) {
	bt += 150;
	bl += 150;
	x = x - bl;
	y = y - bt;
	if (Math.abs(lasCoors[0] - x) < 40 && Math.abs(lasCoors[1] - y) < 40) {
 		let rand = Math.floor(Math.random() * 20);

 		if (Math.floor(Math.random() * 20) < 10) {
			lasCoors[0] += (Math.sign(lasCoors[0] + 0.001) * rand);
 		} else{
			lasCoors[0] -= (Math.sign(lasCoors[0] + 0.001) * rand);
 		}
 		if (Math.floor(Math.random() * 20) < 10) {
			lasCoors[1] += (Math.sign(lasCoors[1] + 0.001) * rand);
 		} else{
			lasCoors[1] -= (Math.sign(lasCoors[1] + 0.001) * rand);
 		}
	}

	let gip = Math.sqrt(Math.pow(lasCoors[0], 2) + Math.pow(lasCoors[1], 2))
	if (gip > 120) {
		lasCoors[0] = lasCoors[0] / gip * 120;
		lasCoors[1] = lasCoors[1] / gip * 120;
	}
	return lasCoors;
}

function Angel(x, y){
	let angel = Math.atan(Math.abs(y / x));
	if (y <= 0) {
		angel +=Math.Pi
	}
	if (x <= 0 && y > 0) {
		angel +=Math.Pi/2
	}
	return angel;
}

document.onmousemove = function (event) {
		let x = event.x - 25;
		let y = event.y - 25;
		let x1 = x - 50;

		document.querySelector('.y-1').style.transform = 'rotate(' + Angel(x, y) + 'rad)';
		document.querySelector('.x-1').style.transform = 'rotate(' + Angel(x1, y) + 'rad)';
		let elem = document.getElementById("area");
		let elem_ball = document.getElementById("area");
		if (elem){
			let box = elem.getBoundingClientRect();
			let ball = elem_ball.getBoundingClientRect();
			let coors = newCoords(event.x, event.y, box.top, box.left, ball.top, ball.left, lasCoors);
			lasCoors = coors.slice();
			document.querySelector('.ball').style.transform = 'translate('+coors[0]+'px, '+coors[1]+'px)'
		}
	}


class Eyes extends Component{

	render(){
		return(
			<div>
				<div className="y-1">
					<div className="y-2" />
					<div className="y-3" />
				</div>
				<div className="x-1">
					<div className="x-2"/>
					<div className="x-3" />
				</div>
			</div>
			);
	}
}
export default Eyes;