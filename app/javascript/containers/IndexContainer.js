import React, { Component } from 'react'
import { Link } from 'react-router'

import AllEmployeesList from '../components/AllEmployeesList'

class IndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showList: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    if (this.state.showList) {
      this.setState({showList: false})
    } else {
      this.setState({showList: true})
    }
  }

  render() {
    let currentUser = this.props.user
    let userFirstName = currentUser.first_name
    let userLastName = currentUser.last_name
    let companyName = this.props.company.name

    let listAllEmployees = null;
    if (this.state.showList) {
      listAllEmployees = <AllEmployeesList employees={ this.props.employees } />
    }

    return(
      <div className="index">
        <div id="company-user-title">
          <h3 className="alignleft">{companyName}</h3>
          <h3 className="alignright">Welcome, {userFirstName} {userLastName}!</h3>
        </div>

        <div className="button-holder">
          <div>
            <Link to={'/employees/new'}>
              <button className='index-button'>ADD EMPLOYEES</button>
            </Link>
          </div>

          <div onClick={this.handleClick}>
            <button className='index-button'>VIEW EMPLOYEES</button>
          </div>
        </div>

          {listAllEmployees}

      </div>
    )
  }
}

export default IndexContainer;
