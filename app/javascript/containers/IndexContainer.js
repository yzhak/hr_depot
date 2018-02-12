import React, { Component } from 'react'
import { Link } from 'react-router'

import AllEmployeesList from '../components/AllEmployeesList'

class IndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      company: {},
      showList: false
    }
    this.handleClick = this.handleClick.bind(this)
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
        company: body.company
       })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleClick(event) {
    if (this.state.showList) {
      this.setState({showList: false})
    } else {
      this.setState({showList: true})
    }
  }

  render() {

    let currentUser = this.state.user
    let userFirstName = currentUser.first_name
    let userLastName = currentUser.last_name
    let companyName = this.state.company.name

    let listAllEmployees = null;
    if (this.state.showList) {
      listAllEmployees = <AllEmployeesList />
    }

    return(
      <div>
          <h1>{companyName}</h1>
          <h3>Welcome, {userFirstName} {userLastName}!</h3>
        <div>
          <Link to={'/employees/new'}>
            <button className='button'>ADD EMPLOYEES</button>
          </Link>
        </div>

        <div>
          <Link to={'/employees/search'}>
            <button className='button'>SEARCH EMPLOYEES</button>
          </Link>
        </div>

        <div onClick={this.handleClick}>
          <button className='button'>VIEW EMPLOYEES</button>
        </div>

        {listAllEmployees}

      </div>
    )
  }
}

export default IndexContainer;
