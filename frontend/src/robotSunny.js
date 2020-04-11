import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';



class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
  		loading: true,
      result: '',
      trigger: false,
    };
    this.triggetNext = this.triggetNext.bind(this);

  }

    componentWillMount() {
    const self = this;
    const { steps } = this.props;
    const search = steps.search.value;
    
    function readyStateChange() {
      if (this.readyState === 4) {
        const data = JSON.parse(this.responseText);
        const bindings = data.results.bindings;
        if (bindings && bindings.length > 0) {
          self.setState({ loading: false, result: bindings[0].comment.value });
        } else {
          self.setState({ loading: false, result: 'Not found.' });
        }
      }
    }
  }

triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render() {
    const { trigger, loading, result } = this.state;

    return (
      <>
      </>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class RobotSunny extends Component {

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
          	message: 'sdf',
          	trigger: 'message',
          }
				]}
				/>
			</>
		);}
}

export default RobotSunny;