import React from 'react'
import { Col, Row, Carousel } from "react-bootstrap"
import { map } from 'lodash'
import LanguagesLogoList from "../IconsBar";

class ProjectDetails extends React.Component {
  render() {
    const { item } = this.props
    return (
      <Row>
        <Col sm={8}>
          <Carousel>
          {map(item.img, (img, key) => {
            return (
            <Carousel.Item>
              <div className="project-image">
                <img src={img.url} alt={key}/>
              </div>
            </Carousel.Item>
            )
          })}
          </Carousel>
        </Col>
        <Col sm={4}>
          <div className="project-title"><h2>{item.name}</h2></div>
          <div className="project-description">{item.description}</div>
          <h3>Languages:</h3>
          <LanguagesLogoList/>
          <h3>Links:</h3>
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