import React from 'react'
import Login from './Login'
import Settings from './Settings'
import ContentControl from './ContentControl'
import './style.css'

class ContentManagement extends React.Component {
  state = {
    isLogIn: false,
  }

  handleLogin = () => {
    console.log('called 2')
    this.setState({
      isLogIn: true,
    })
  }

  render() {
    return (
      <div className="admin-area">
        {this.state.isLogIn ? (
          <div>
            <Settings/>
            <ContentControl/>
          </div>
        ) : (
          <Login onSubmit={this.handleLogin}/>
        )}
      </div>
    )
  }
}

export default ContentManagement