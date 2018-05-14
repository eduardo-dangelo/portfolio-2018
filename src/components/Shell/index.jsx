import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { ParallaxProvider } from 'react-scroll-parallax';

class Shell extends React.Component {
  render() {
    const { scrollShow } = this.props
    return (
      <div>
        <ParallaxProvider>
          <Header scrollShow={scrollShow}/>
          {this.props.children}
          <Footer/>
        </ParallaxProvider>
      </div>
    )
  }
}

export default Shell