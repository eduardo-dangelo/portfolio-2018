import React from 'react'
import FaCog from 'react-icons/lib/fa/cog'
import {Col, Row} from "react-bootstrap"
import Button from "../Button"
import FieldGroup from '../FormControl'

class ContentControl extends React.Component {
  render() {
    return (
      <div className="container admin-container">
        <div className="admin-box animated bounceInUp">
          <Row>
            <Col sm={12}>
              <h3><FaCog/> ContentManagement</h3>
              <Col sm={12}>
                <form>
                  <h4>Project</h4>
                  <Row>
                    <Col sm={6}>
                      <FieldGroup
                        id="name"
                        type="text"
                        label="Project name"
                        placeholder="Enter name..."
                      />
                    </Col>
                    <Col sm={6}>
                      <FieldGroup
                        id="activity"
                        type="text"
                        label="Project type"
                        placeholder="Enter description..."
                      />
                    </Col>
                    <Col sm={12}>
                      <FieldGroup
                        id="activity"
                        type="text"
                        label="Link github"
                        placeholder="Enter link..."
                      />
                    </Col>
                    <Col sm={12}>
                      <FieldGroup
                        id="name"
                        type="text"
                        label="Link Demo"
                        placeholder="Enter link..."
                      />
                    </Col>
                    <Col sm={12}>
                      <FieldGroup
                        id="profile"
                        type="textarea"
                        label="Description"
                        componentClass="textarea"
                        placeholder="Enter profile text..."
                      />
                    </Col>
                    <Col sm={12}>
                      <Button
                        type={'button'}
                        label={'Save Changes'}
                      />
                      <Button
                        type={'button'}
                        label={'Upload Image'}
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

export default ContentControl