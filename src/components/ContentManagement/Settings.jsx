import React from 'react'
import FaCog from 'react-icons/lib/fa/cog'
import {Col, Row} from "react-bootstrap"
import Button from "../Button"
import FieldGroup from '../FormControl'

class Settings extends React.Component {
  render() {
    return (
      <div className="container admin-container">
        <div className="admin-box animated bounceInUp">
          <Row>
            <Col sm={12}>
            <h3><FaCog/> Profile Settings</h3>
            <Col sm={12}>
              <form>
                <h4>Header</h4>
                <Row>
                  <Col sm={6}>
                    <FieldGroup
                      id="name"
                      type="text"
                      label="Name"
                      placeholder="Enter name..."
                    />
                  </Col>
                  <Col sm={6}>
                    <FieldGroup
                      id="activity"
                      type="text"
                      label="Activity"
                      placeholder="Enter activity..."
                    />
                  </Col>
                  <Col sm={12}>
                  <h4>About</h4>
                  </Col>
                  <Col sm={12}>
                    <FieldGroup
                      id="profile"
                      type="textarea"
                      label="Profile text"
                      componentClass="textarea"
                      placeholder="Enter profile text..."
                    />
                  </Col>
                  <Col sm={12}>
                    <FieldGroup
                      id="skills"
                      label="Skills"
                      componentClass="textarea"
                      placeholder="Enter skills paragraph..."
                    />
                  </Col>
                  <Col sm={12}>
                    <FieldGroup
                      id="contact"
                      label="Contact"
                      componentClass="textarea"
                      placeholder="Enter contact text..."
                    />
                  </Col>
                  <Col sm={12}>
                    <Button
                      type={'button'}
                      label={'Save Changes'}
                    />
                  </Col>
                </Row>
              </form>
            </Col>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Settings