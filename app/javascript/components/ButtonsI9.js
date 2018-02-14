import React from 'react'
import { Link } from 'react-router'

const ButtonsI9 = (props) => {
  return(
    <div>
      <div>
        <Link to={'/employees/new'}>
          <button>ADD I-9</button>
        </Link>
      </div>

      <div>
        <Link to={'/employees/new'}>
          <button>VIEW I-9</button>
        </Link>
        { " " }
        <Link to={'/employees/new'}>
          <button>EDIT I-9</button>
        </Link>
        { " " }
        <Link to={'/employees/new'}>
          <button>DELETE I-9</button>
        </Link>
      </div>

    </div>
  )
}

export default ButtonsI9
