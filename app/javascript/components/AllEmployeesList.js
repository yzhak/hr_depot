import React, { Component } from 'react'

import SearchInput, {createFilter} from 'react-search-input'
import EmployeeTile from './EmployeeTile'

class AllEmployeesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }

  render() {
    let companyEmployees = this.props.employees

    const KEYS_TO_FILTER = ['last_name', 'first_name']

    let employeeTiles = companyEmployees.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTER)).map((employee) => {
      return(
        <div>
          <EmployeeTile
            key={employee.id}
            id={employee.id}
            firstName={employee.first_name}
            lastName={employee.last_name}
          />
        </div>
      )
    })

    return(
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />

        <div className="employee-list">
            <ul id="list">
              { employeeTiles }
            </ul>
        </div>
      </div>
    )
  }
}
export default AllEmployeesList;
