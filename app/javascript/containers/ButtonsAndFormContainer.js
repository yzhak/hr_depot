import React, { Component } from 'react'

import ButtonContainer from './ButtonContainer'
import Form from './Form'

class ButtonsAndFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      i9s: {}
    }
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
        // check body data type
        this.setState({ i9s: body.reviews })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    return(
      <div>
        <ButtonContainer
        />

        <Form
        />
      </div>
    )
  }
}

export default ButtonsAndFormContainer
