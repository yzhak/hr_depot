import React, { Component } from 'react'

import IndexContainer from './IndexContainer'
import WhitelistForm from '../components/WhitelistForm'

class CompanyExperience extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      company: {},
      employees: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/users.json`, { credentials: 'same-origin' })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        user: body.current_user,
        company: body.company,
        employees: body.employees
       })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let companyName = this.state.company.name

    let displayedComponent = <IndexContainer
      user={ this.state.user }
      company={ this.state.company }
      employees={ this.state.employees }
    />

    if (companyName === 'Master') {
      displayedComponent = <WhitelistForm />
    }

    return(
      <div className="index">

          {displayedComponent}

      </div>
    )
  }
}

export default CompanyExperience;
