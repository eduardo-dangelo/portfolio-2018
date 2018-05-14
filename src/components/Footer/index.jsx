import React from 'react'
import FaGithub from 'react-icons/lib/fa/github'
import './style.css'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="container">
          <a href="https://github.com/eduardo-dangelo" target="_blank" rel="noopener">
            <FaGithub/> eduardo-dangelo
          </a>
        </div>
      </div>
    )
  }
}

export default Footer