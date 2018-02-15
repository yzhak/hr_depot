import React, { Component } from 'react'

import EmployeeTile from './EmployeeTile'

class AllEmployeesList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    let companyEmployees = this.props.employees

    let employeeTiles = companyEmployees.map((employee) => {
      return(
        <EmployeeTile
          key={employee.id}
          id={employee.id}
          firstName={employee.first_name}
          lastName={employee.last_name}
        />
      )
    })

    return(
      <div>
        <div className="all-employee-list">
          <ul id="list">
            {employeeTiles}
          </ul>
          <button className='button' id="hide" onClick={ this.props.handleHide }>Hide List</button>
        </div>
        <div className="toggled-employee-list"></div>
      </div>
    )
  }
}
export default AllEmployeesList;
