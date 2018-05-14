import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

class Icon extends React.Component {
  state = {
    animate: false,
  };

  handleClick = () => {
    this.setState({
      animate: true,
    });
    setTimeout(() => {
      this.setState({
        animate: false
      })
    }, 1000);
  };

  render() {
    const { item } = this.props;
    const { animate } = this.state;
    const tooltip = (
      <Tooltip id="tooltip" className={`tooltip ${animate && 'hidden'}`}>
        <strong>{item.name}</strong>
      </Tooltip>
    );

    return (
      <div>
        <OverlayTrigger placement="top" overlay={tooltip}>
        <div className="logo-container" onClick={this.handleClick}>
          <img className={`img animated ${animate && 'bounce'}`} src={item.logo} alt={item.name}/>
        </div>
        </OverlayTrigger>
        {/*{this.renderLogoToltip}*/}
      </div>
    )
  }
}

export default Icon