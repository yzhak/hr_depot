import React, { Component } from 'react'

import OneButtonI9 from '../components/OneButtonI9'
import ThreeButtonsI9 from '../components/ThreeButtonsI9'


class ButtonContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    let buttonsI9;
    if (this.props.lengthI9 === 0) {
      buttonsI9 = <OneButtonI9
        handleAddI9={ this.props.handleAddI9 }
      />
    } else {
      buttonsI9 = <ThreeButtonsI9
        handleViewI9={ this.props.handleViewI9 }
        handleEditI9={ this.props.handleEditI9 }
        handleDelI9={ this.props.handleDelI9 }
      />
    }

    return(
      <div className="index">
        { buttonsI9 }
      </div>
    )
  }
}

export default ButtonContainer
