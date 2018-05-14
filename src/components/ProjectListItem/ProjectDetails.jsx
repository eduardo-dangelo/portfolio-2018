import React from 'react'
import { Col, Row } from "react-bootstrap"

class ProjectDetails extends React.Component {
  render() {
    const { item } = this.props
    return (
      <Row>
        <Col sm={8}>
          <div className="project-image"/>
        </Col>
        <Col sm={4}>
          <div className="project-title"><h2>{item.name}</h2></div>
          <div className="project-description">{item.description}</div>
          <div className="project-link">
            GITHUB
          </div>
          <div className="project-link">
            LIVE DEMO
          </div>
        </Col>
      </Row>
    )
  }
}

export default ProjectDetails