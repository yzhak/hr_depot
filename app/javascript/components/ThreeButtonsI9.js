import React from 'react'

const ThreeButtonsI9 = (props) => {
  return(
    <div>
      <button onClick={ props.handleViewI9 }>VIEW I-9</button>
      { " " }
      <button onClick={ props.handleEditI9 }>EDIT I-9</button>
      { " " }
      <button onClick={ props.handleDelI9 }>DELETE I-9</button>
    </div>
  )
}

export default ThreeButtonsI9
