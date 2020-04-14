import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';


class Answer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: '',
      trigger: false,
    };
  }
    commponentWillMount() {
      const { steps } = this.props;

      var myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({"text": steps.message.value});

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://127.0.0.1:8000/sunny/", requestOptions)
        .then(response => response.text())
        .then(result => {
          let answer =  result.substr(2, result.length - 4);
          this.setState( {answer: answer})

          console.log(answer);
          return answer;
        })
        .catch(error => console.log('error', error));

    };


    render() {
      const { trigger, loading, result } = this.state;

      return(
        <div>
           { loading ? "sdf": result }
        </div>
        );
     }
}


class RobotSunny extends Component {
    constructor(props) {
    super(props);

    this.state = {
      answer: 'hello',
      request: '',
    };

  }

	render() {
		return(
			<>
				<ChatBot
				steps={[
					{
            id: 'greating',
            message: 'What is your name?',
            trigger: 'message',

          },
          {
            id: 'message',
            user: true,
            trigger: 'next',
          },
          {
          	id: 'next',
          	component: <Answer />,

          	trigger: 'message',
          }
				]}
				/>
			</>
		);}
}

export default RobotSunny;