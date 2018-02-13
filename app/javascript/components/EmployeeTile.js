import React from 'react'
import { Link } from 'react-router'

const EmployeeTile = (props) => {

  return(
    <div>
      <Link to={`/employees/${props.id}`}>
        <li>{props.lastName}, {props.firstName}</li>
      </Link>
    </div>
  )
}

export default EmployeeTile;
