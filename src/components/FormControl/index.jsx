import React from 'react'
import {ControlLabel, FormControl, FormGroup, HelpBlock, Row, Col } from "react-bootstrap"

export default function FieldGroup ({ id, label, help, componentClass, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl componentClass={componentClass} {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}