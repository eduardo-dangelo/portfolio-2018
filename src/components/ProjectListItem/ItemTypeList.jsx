import React from 'react'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import FaFileCode from 'react-icons/lib/fa/file-archive-o'
import ProjectDetails from './ProjectDetails'

class ItemTypeList extends React.Component {
  render() {
    const { isItemActive, item, onSelectItem, index } = this.props
    const firstChild = index === 0
    return (
      <div className={`project-list-item ${firstChild && 'margin-top'} animated fadeIn ${isItemActive && 'active'}`}>
        <div className="project-header" onClick={onSelectItem}>
          <FaFileCode/> {item.name}
          <div className={`arrow-icon ${isItemActive && 'active'}`}>
            <FaChevronDown/>
          </div>
        </div>
        {isItemActive && (
          <div className="project-container">
            <div className="project-divider"/>
            <ProjectDetails item={item}/>
          </div>
        )}
      </div>
    )
  }
}

export default ItemTypeList