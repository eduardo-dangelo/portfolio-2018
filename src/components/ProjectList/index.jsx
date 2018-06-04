import React from 'react'
import ProjectListItem from '../ProjectListItem'
import { map } from 'lodash'
import FaList from 'react-icons/lib/fa/list-ul'
import FaTh from 'react-icons/lib/fa/th'
import FaFlask from 'react-icons/lib/fa/folder-open'
import './style.css'

class ProjectList extends React.Component {
  state = {
    listType: 'block',
    activeItemId: '',
    showDetails: false
  }

  setListType = (type) => () => {
    this.setState({
      listType: type,
    })
  }

  handleSelectItem = (item) => {
    const { activeItemId } = this.state

    if (activeItemId === item.id) {
      this.setState({
        activeItemId: '',
        showDetails: false
      })
    }

    if (activeItemId !== item.id) {
      this.setState({
        activeItemId: item.id,
        showDetails: true
      })
    }
  }

  renderListTypeController = () => {
    const { listType } = this.state
    return (
      <div className="list-type-container">
        <div className="list-type">
          <div
            className={`list-type-item ${listType === 'list' && 'active'}`}
            onClick={this.setListType('list')}
          >
            <FaList/>
          </div>
          <div
            className={`list-type-item ${listType === 'block' && 'active'}`}
            onClick={this.setListType('block')}
          >
            <FaTh/>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { listType, activeItemId, showDetails } = this.state
    return (
      <div className="project-list-container">
        <div className="container">
          {this.renderListTypeController()}
          <h2><FaFlask/> PortFolio</h2>
          {map(projectList, (item, key) => {
            return (
              <ProjectListItem
                key={key}
                index={key}
                item={item}
                listType={listType}
                activeItemId={activeItemId}
                showDetails={showDetails}
                onSelectItem={this.handleSelectItem}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default ProjectList


const projectList = [
  {
    id: '01',
    name: 'Fight Game Menu',
    description: 'A React application using Redux to simulate a fight game menu where you select characters and proceed to the fight',
    img: [
      { url: require('./img/fight_game_menu_01.png') },
      { url: require('./img/fight_game_menu_02.png') }
    ],
    link: 'http://github.com/eduardo-dangelo'
  },
  {
    id: '02',
    name: 'Weather App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed lacinia nisl, sed volutpat nisi. Phasellus convallis purus blandit mattis luctus. Vivamus vehicula urna arcu, eget sodales dolor fermentum quis.',
    img: [
      { url: '' }
    ],
    link: 'http://github.com/eduardo-dangelo'
  },
  {
    id: '03',
    name: 'Fight Game Menu',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed lacinia nisl, sed volutpat nisi. Phasellus convallis purus blandit mattis luctus. Vivamus vehicula urna arcu, eget sodales dolor fermentum quis.',
    img: [
      { url: '' }
    ],
    link: 'http://github.com/eduardo-dangelo'
  },
  {
    id: '04',
    name: 'Fight Game Menu',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed lacinia nisl, sed volutpat nisi. Phasellus convallis purus blandit mattis luctus. Vivamus vehicula urna arcu, eget sodales dolor fermentum quis.',
    img: [
      { url: '' }
    ],
    link: 'http://github.com/eduardo-dangelo'
  },
  {
    id: '05',
    name: 'Fight Game Menu',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed lacinia nisl, sed volutpat nisi. Phasellus convallis purus blandit mattis luctus. Vivamus vehicula urna arcu, eget sodales dolor fermentum quis.',
    img: [
      { url: '' }
    ],
    link: 'http://github.com/eduardo-dangelo'
  },
  {
    id: '06',
    name: 'Fight Game Menu',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed lacinia nisl, sed volutpat nisi. Phasellus convallis purus blandit mattis luctus. Vivamus vehicula urna arcu, eget sodales dolor fermentum quis.',
    img: [
      { url: '' }
    ],
    link: 'http://github.com/eduardo-dangelo'
  },
  {
    id: '07',
    name: 'Fight Game Menu',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed lacinia nisl, sed volutpat nisi. Phasellus convallis purus blandit mattis luctus. Vivamus vehicula urna arcu, eget sodales dolor fermentum quis.',
    img: [
      { url: '' }
    ],
    link: 'http://github.com/eduardo-dangelo'
  },
  {
    id: '08',
    name: 'Fight Game Menu',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed lacinia nisl, sed volutpat nisi. Phasellus convallis purus blandit mattis luctus. Vivamus vehicula urna arcu, eget sodales dolor fermentum quis.',
    img: [
      { url: '' }
    ],
    link: 'http://github.com/eduardo-dangelo'
  },
];