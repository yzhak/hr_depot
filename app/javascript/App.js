import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import IndexContainer from './containers/IndexContainer'
import EmployeeForm from './containers/EmployeeForm'
import EmployeeSearch from './containers/EmployeeSearch'
import EmployeeShowContainer from './containers/EmployeeShowContainer'


const App = (props) => {

  return(
    <Router history={browserHistory}>
      <Route path='/' component={IndexContainer} />
      <Route path='/employees/new' component={EmployeeForm} />
      <Route path='/employees/search' component={EmployeeSearch} />
      <Route path='/employees/:id' component={EmployeeShowContainer} />
    </Router>
  )
}

export default App;
