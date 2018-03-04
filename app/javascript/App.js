import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import CompanyExperience from './containers/CompanyExperience'
import EmployeeForm from './containers/EmployeeForm'
import EmployeeShowContainer from './containers/EmployeeShowContainer'


const App = (props) => {

  return(
    <Router history={browserHistory}>
      <Route path='/' component={CompanyExperience} />
      <Route path='/employees/new' component={EmployeeForm} />
      <Route path='/employees/:id' component={EmployeeShowContainer} />
    </Router>
  )
}

export default App;
