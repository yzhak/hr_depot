import React, { Component } from 'react'

import EmployeeShowTile from '../components/EmployeeShowTile'
import ButtonsAndFormContainer from './ButtonsAndFormContainer'

class EmployeeShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employee: {}
    }
  }

  componentDidMount() {
    let id = this.props.params.id;
    fetch(`/api/v1/employees/${id}.json`)
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
        this.setState({ employee: body })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div>

        <EmployeeShowTile
          employeeData={ this.state.employee }
        />

        <ButtonsAndFormContainer
          employeeId={ this.props.params.id }
        />

      </div>
    )
  }
}

export default EmployeeShowContainer;
