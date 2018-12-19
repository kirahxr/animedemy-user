import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
};

const panelStyle = {
  backgroundColor: 'rgba(0,0,0,.75)',
  alignItems: 'center',
  border: 0,
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 30,
  paddingBottom: 50,
  width: 400,
};

const buttonStyle = {
  marginBottom: 0,
  backgroundColor: "#00c0c1",
  width: 100,
  border: 0,
};

const formStyle = {
  background: "#333",
  backgroundColor: 'rgb(51, 51, 51)',
  height: 50,
  borderColor: '#00c0c1',
  color: "white",
};

const titleStyle = {
  textAlign: "left",
  height: 60,
  color: "white",
};

const signStyle = {
  textAlign: "left",
  paddingTop: 30,
  height: 20,
  color: "white",
};

class LoginForm extends Component {

  handleFormSubmit(e) {
    e.preventDefault();

    console.log("FORM SUBMIT!");

  }

  render() {
    return (
      <div style={divStyle}>
        <Panel style={panelStyle}>
          <div style={titleStyle}>
          <h2>Login</h2>
          </div>
            <Form horizontal className="LoginForm" id="loginForm">
              <FormGroup controlId="formEmail">
                <FormControl style={formStyle} type="email" placeholder="Username" />
              </FormGroup>
              <FormGroup controlId="formPassword">
                <FormControl style={formStyle} type="password" placeholder="Password" />
              </FormGroup>
              <FormGroup controlId="formSubmit">
                <Button style={buttonStyle} bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
                  Login
                </Button>
              </FormGroup>
            </Form>
          <div style={signStyle}>
          New on Animedemy? Sign Up
          </div>
        </Panel>
      </div>
    )
  }
}

export default LoginForm;
