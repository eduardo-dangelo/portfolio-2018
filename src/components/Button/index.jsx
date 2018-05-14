import React from 'react'
import './style.css'

class Button extends React.Component {
  render() {
    const { label, type, handleClick } = this.props

    return (
      <button className="project-btn" type={type} onClick={handleClick}>
        {label}
      </button>
    )
  }
}

export default Button