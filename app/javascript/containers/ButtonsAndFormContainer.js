import React, { Component } from 'react'

import ButtonContainer from './ButtonContainer'
import Form from './Form'

class ButtonsAndFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      i9s: []
    }
    this.handleAddI9 = this.handleAddI9.bind(this)
    this.handleViewI9 = this.handleViewI9.bind(this)
    this.handleEditI9 = this.handleEditI9.bind(this)
    this.handleDelI9 = this.handleDelI9.bind(this)

  }

  componentDidMount() {
    let id = this.props.employeeId
    fetch(`/api/v1/employees/${id}/i9s.json`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => {
        return response.json()
      })
      .then(body => {
        this.setState({ i9s: body })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleAddI9(event) {

  }

  handleViewI9(event) {

  }

  handleEditI9(event) {

  }

  handleDelI9(event) {

  }

  render() {
    let i9Array = this.state.i9s

    return(
      <div>
        <ButtonContainer
          lengthI9={ i9Array.length }
          handleAddI9={ this.handleAddI9 }
          handleViewI9={ this.handleViewI9 }
          handleEditI9={ this.handleEditI9 }
          handleDelI9={ this.handleDelI9 }
        />

        <Form
        />
      </div>
    )
  }
}

export default ButtonsAndFormContainer
