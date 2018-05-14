import React from 'react'
import './style.css'
import { Row, Col } from 'react-bootstrap'
import FaUser from 'react-icons/lib/fa/user'
import FaStar from 'react-icons/lib/fa/star-o'
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o'
import FaFileTextO from 'react-icons/lib/fa/file-text-o'
import FaLinkedIn from 'react-icons/lib/fa/linkedin-square'
import FaCodePen from 'react-icons/lib/fa/codepen'
import FaGithub from 'react-icons/lib/fa/github-square'
import FaLink from 'react-icons/lib/fa/external-link'
import FaPdf from 'react-icons/lib/fa/file-pdf-o'

const content = {
  about: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lacus suscipit, pulvinar magna ac, convallis sapien. Sed sollicitudin sodales lacus sit amet ullamcorper. Fusce suscipit, metus vitae blandit gravida, leo ante porta quam, quis auctor tortor felis sed dolor. Suspendisse tempor nisl et mollis viverra. Curabitur pulvinar libero a massa cursus, nec porta arcu interdum. Praesent pellentesque tempor mauris, ut fermentum ex elementum blandit. Nam eu justo lobortis, volutpat turpis vitae, imperdiet libero.',
  }
}

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="container">
          <h2><FaFileTextO/> About</h2>
          <div className="container">
          <Row>
            <Col sm={12}>
              <h3><FaUser/> Profile</h3>
              <p>{content.about.description}</p>
            </Col>
            <Col sm={12}>
              <h3><FaStar/> Skills</h3>
              <p>{content.about.description}</p>
            </Col>
            <Col sm={12}>
              <h3><FaEnvelopeO/> Contact</h3>
              <p>Contact me by e-mail or via my social media</p>
              <ul>
                <li>
                  <a href="">
                    <span><FaEnvelopeO/> eduardodonatodangelo@gmail.com</span>
                  </a>
                </li>
              </ul>
            </Col>
            <Col sm={6}>
              <h3><FaLink/> Links</h3>
              <ul>
                <li>
                  <a href="">
                    <FaPdf/> CV
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaLinkedIn/> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaCodePen/> CodePen
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaGithub/> Github
                  </a>
                </li>
              </ul>
            </Col>
            {/*<Col sm={6}>*/}
              {/*<h3><FaLink/> Links</h3>*/}
              {/*<div>*/}
              {/*<Button*/}
                {/*label={<span><FaPdf/> CV</span>}*/}
                {/*type="button"*/}
              {/*/>*/}
              {/*</div>*/}
              {/*<div>*/}
              {/*<Button*/}
                {/*label={<span> <FaLinkedIn/> LinkedIn</span>}*/}
                {/*type="button"*/}
              {/*/>*/}
              {/*</div>*/}
              {/*<div>*/}
              {/*<Button*/}
                {/*label={<span><FaCodePen/> CodePen</span>}*/}
                {/*type="button"*/}
              {/*/>*/}
              {/*</div>*/}
              {/*<div>*/}
              {/*<Button*/}
                {/*label={<span><FaGithub/> Github</span>}*/}
                {/*type="button"*/}
              {/*/>*/}
              {/*</div>*/}
            {/*</Col>*/}
          </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default About