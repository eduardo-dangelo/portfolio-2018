import React from 'react'
import Button from '../Button'
// import FormControl from '../FormControl'
import {ControlLabel, FormControl, FormGroup, HelpBlock, Row, Col } from "react-bootstrap"

const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Login extends React.Component {
  handleSubmit = (e) => {
    const { onSubmit } = this.props
    e.preventDefault()
    onSubmit()
    console.log('called')
  }

  render() {
    return (
      <div className="container login-container">
        <div className="admin-box animated bounceInUp">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <Row>
              <Col sm={12}>
                <FieldGroup
                  id="email"
                  type="text"
                  label="email"
                  placeholder="Enter text"
                />
              </Col>
              <Col sm={12}>
                <FieldGroup
                  id="password"
                  type="password"
                  label="password"
                  placeholder="Enter text"
                />
              </Col>
              <Col sm={12}>
                <Button
                  type={'submit'}
                  label={'Login'}
                />
              </Col>
            </Row>
          </form>
        </div>
      </div>
    )
  }
}

export default Login