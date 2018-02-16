import React from 'react'

const EmployeeShowTile = (props) => {
  return(
    <div className="emp-show-tile">
      <h3>Employment Eligibility Verification</h3>
      <h4><b>Section 1.</b> Employee Information</h4>
      <br></br>
      <table>
        <tr>
          <th><h6><b>Last Name:</b> { props.employeeData.last_name }</h6></th>
          <th><h6><b>First Name:</b> { props.employeeData.first_name }</h6></th>
          <th><h6><b>Middle Initial:</b> { props.employeeData.middle_initial }</h6></th>
          <th><h6><b>Other Last Names:</b> { props.employeeData.other_last_names }</h6></th>
        </tr>
        <tr>
          <th><h6><b>Street Number and Name:</b> { props.employeeData.street_number_name }</h6></th>
          <th><h6><b>Apt:</b> { props.employeeData.apt }</h6></th>
          <th><h6><b>City:</b> { props.employeeData.city }</h6></th>
          <th><h6><b>State:</b> { props.employeeData.state }</h6></th>
          <th><h6><b>Zip Code:</b> { props.employeeData.zip_code }</h6></th>
        </tr>
        <tr>
          <th><h6><b>Date of Birth:</b> { props.employeeData.date_of_birth }</h6></th>
          <th><h6><b>Email:</b> { props.employeeData.email }</h6></th>
          <th><h6><b>Telephone:</b> { props.employeeData.telephone }</h6></th>
        </tr>
      </table>
    </div>
  )
}

export default EmployeeShowTile
