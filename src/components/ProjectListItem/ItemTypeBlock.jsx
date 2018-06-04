import React from 'react'
import ProjectDetails from './ProjectDetails'
import FaTimes from 'react-icons/lib/fa/times-circle'

class ItemTypeBlock extends React.Component {
  render() {
    const { item, isItemActive, onSelectItem, showDetails } = this.props
    return (
      <div>
        <div className={`project-block-item animated ${showDetails ? 'inactive' : 'fadeIn'}`} onClick={onSelectItem}>
          <div className="project-block-hero">
            <img src={item.img[0].url} alt="asd"/>
          </div>
          <div className="project-block-label">{item.title}</div>
        </div>
        {isItemActive && (
          <div className="overlay-container">
            <div className="overlay-content animated bounceInUp">
              <div className="close-btn" onClick={onSelectItem}>
                <FaTimes/>
              </div>
              <ProjectDetails item={item}/>
            </div>
            <div className="overlay-close-area animated fadeIn" onClick={onSelectItem}/>
          </div>
        )}
      </div>
    )
  }
}

export default ItemTypeBlock