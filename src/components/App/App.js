import React, { Component } from 'react'
import './App.css'
import Shell from '../Shell'
import LanguagesLogoList from '../IconsBar'
import ProjectList from '../ProjectList'
import About from '../About'

class App extends Component {
  state = {
    scrollShow: false,
  }

  handleScroll = (e) => {
    if (e.target.scrollTop > 200) {
      this.setState({
        scrollShow: true
      })
    } else {
      this.setState({
        scrollShow: false
      })
    }
  }

  render() {
    const { scrollShow } = this.state
    return (
      <div ref="list" className="App" onScroll={this.handleScroll}>
        <Shell scrollShow={scrollShow}>
          <LanguagesLogoList/>
          <ProjectList/>
          <About/>
        </Shell>
      </div>
    );
  }
}

export default App
