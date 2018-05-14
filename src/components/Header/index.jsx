import React from 'react'
import './style.css'
import FaLaptop from 'react-icons/lib/fa/envira'

class Header extends React.Component {
  state = {
    renderHeader: false,
  }

  componentWillReceiveProps(nextProps) {
    const { scrollShow } = this.props

    if (scrollShow) {
      this.setState({
        renderHeader: true,
      })
    }

    if (!scrollShow && this.state.renderHeader) {
      setTimeout(() => {
        this.setState({
          renderHeader: false,
        })
      }, 3000);
    }
  }

  renderFixedHeader = () => {
    const { scrollShow } = this.props

    if (this.state.renderHeader) {
      return (
        <div className={`fixed-header animated ${scrollShow ? 'slideInDown' : 'slideOutUp'}`}>
          <div className="container header-container">
            <div className="header-logo">
              <span className="header-logo-icon">
                <FaLaptop/>
              </span>
              Eduardo D'Angelo
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    const { scrollShow } = this.props

    return (
      <div>
        {this.state.renderHeader && this.renderFixedHeader()}
        <div className="header">
          <div className={`container header-container animated ${!scrollShow ? 'fadeIn' : 'fadeOut'}`}>
            <div className="header-logo">
              <span className="header-logo-icon">
                <FaLaptop/>
              </span>
              Eduardo D'Angelo
            </div>
            <div className={`header-title`}>
              <div className="header-title-content">
                Web Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header