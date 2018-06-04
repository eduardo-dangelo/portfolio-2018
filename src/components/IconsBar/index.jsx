import React from 'react'
import { map } from 'lodash'
import './style.css'
import Icon from './Icon'

const skillList = [
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
  },
  {
    name: 'React',
    logo: require('../imgs/logo_react.png')
  },
  {
    name: 'Node.js',
    logo: require('../imgs/logo_nodejs.png')
  },
  {
    name: 'Typescript',
    logo: require('../imgs/logo_typescript.png')
  },
  {
    name: 'Git',
    logo: require('../imgs/logo_git.png')
  },
  {
    name: 'Redux',
    logo: require('../imgs/logo_redux.png')
  },
  {
    name: 'HTML',
    logo: require('../imgs/logo_html.png')
  },
  {
    name: 'css',
    logo: require('../imgs/logo_css.png')
  },
  {
    name: 'Javascript',
    logo: require('../imgs/logo_js.png')
  },
  {
    name: 'Apollo',
    logo: require('../imgs/logo_apollo.png')
  },
  {
    name: 'JQuery',
    logo: require('../imgs/logo_jquery.png')
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
          <div className="container logo-list-container">
            {map(skillList, (item, key) => {
              return (
                <Icon item={item}/>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default LanguagesLogoList