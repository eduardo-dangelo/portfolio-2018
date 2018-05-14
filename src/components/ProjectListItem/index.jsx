import React from 'react'
import './style.css'
import ItemTypeBlock from './ItemTypeBlock'
import ItemTypeList from './ItemTypeList'

class ProjectListItem extends React.Component {
  handleSelectItem = () => {
    const { onSelectItem, item } =this.props
    onSelectItem(item)
  }

  renderItemByType = () => {
    const { listType, item, activeItemId, showDetails, index } = this.props
    const isItemActive = item.id === activeItemId

    if (listType === 'list') {
      return (
        <ItemTypeList
          index={index}
          item={item}
          isItemActive={isItemActive}
          onSelectItem={this.handleSelectItem}
        />
      )
    }

    if (listType === 'block') {
      return (
        <ItemTypeBlock
          item={item}
          showDetails={showDetails}
          isItemActive={isItemActive}
          onSelectItem={this.handleSelectItem}
        />
      )
    }
  }

  render() {
    return this.renderItemByType()
  }
}

export default ProjectListItem