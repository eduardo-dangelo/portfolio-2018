import React from 'react'
import { map } from 'lodash'
import './style.css'
import Icon from './Icon'

const skillList = [
  {
    name: 'Github',
    logo: require('../imgs/logo_github.png')
  },
  {
    name: 'GraphQL',
    logo: require('../imgs/logo_graphql.png')
  },
  {
    name: 'Adobe Illustrator',
    logo: require('../imgs/logo_illustrator.png')
  },
  {
    name: 'Adobe Photoshop',
    logo: require('../imgs/logo_photoshop.png')
  },
  {
    name: 'Sass',
    logo: require('../imgs/logo_sass.png')
  },
  {
    name: 'Webpack',
    logo: require('../imgs/logo_webpack.png')
  }
]

class LanguagesLogoList extends React.Component {
  state = {
    languageName: null,
  }

  renderItemName = (item) => () => {
    this.setState({
      languageName: item.name,
    })
  }

  handleMouseOut = () => {
    this.setState({
      languageName: null,
    })
  }

  render() {
    const { languageName } = this.state
    return (
      <div>
        <div className="language-container">
          {/*<div className={`language-header`}>*/}
              {/*<h5>Languages List</h5>*/}
          {/*</div>*/}
          <div className="container logo-list-container">
            {map(skillList, (item, key) => {
              return (
                <Icon item={item}/>
              )
            })}
          </div>
          {languageName && (
          <div className={`display-language-name animated fadeIn ${languageName && 'active'}`}>
              {/*<div>*/}
                {/*{languageName}*/}
              {/*</div>*/}
              Working eficient with {languageName}
          </div>
          )}
        </div>
      </div>
    )
  }
}

export default LanguagesLogoList