import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

class SignupForm extends React.Component {
  state = {
    email: '',
    password: '',
    first_name: ''
  };
  signup(e){
    try {
      if(this.state.first_name) {
        this.props.handle_signup(e, this.state)
      
      }else{
        alert("Empty Username")
      }
    } catch(err) {
      alert("Empty Username")
    }
  }
  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <>
        <h4>Sign Up</h4>
        <label htmlFor="first_name">nik</label>
        <input
          type="text"
          name="first_name"
          value={this.state.first_name}
          onChange={this.handle_change}
        />
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handle_change}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
        />
        <Button className="sign_log_button" variant='primary' 
          onClick={this.signup}>
          Sign up
        </Button>
      </>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};
