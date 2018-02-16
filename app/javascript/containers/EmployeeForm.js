import React, { Component } from 'react'
import { browserHistory } from 'react-router'


class EmployeeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employee: {
        lastName: '',
        firstName: '',
        middleInitial: '',
        otherLastNames: '',
        street: '',
        apt: '',
        city: '',
        state: '',
        zipCode: '',
        birthDate: '',
        email: '',
        phone: ''
      },
      errors: {}

    }
    this.handleChange = this.handleChange.bind(this)
    this.setFormDetail = this.setFormDetail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateField = this.validateField.bind(this)
    this.handleFormPayload = this.handleFormPayload.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleChange(event) {
    let fieldName = event.target.name
    let input = event.target.value
    this.setFormDetail(fieldName, input)
  }

  setFormDetail(key, value) {
    let oldState = this.state.employee
    let newState = Object.assign({}, oldState)
    newState[key] = value
    this.setState({
      employee: newState
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.validateField("last_name", this.state.employee.lastName)
    this.validateField("first_name", this.state.employee.firstName)
    this.validateField("street", this.state.employee.street)
    this.validateField("city", this.state.employee.city)
    this.validateField("state", this.state.employee.state)
    this.validateField("zip_code", this.state.employee.zipCode)
    this.validateField("date_of_birth", this.state.employee.birthDate)
    if(Object.keys(this.state.errors).length === 0) {
      this.handleFormPayload()
    }
  }

  validateField(fieldName, input) {
    let formattedFieldName = fieldName.replace(/_/, " ")
    if (input === '' || input === ' ') {
      let newError = { [fieldName]: `You must provide a valid ${formattedFieldName}` }
      this.setState({ errors: Object.assign(this.state.errors, newError)})
    }
    else {
      let errorState = this.state.errors
      delete errorState[fieldName]
      this.setState({ errors: errorState })
    }
  }

  handleFormPayload() {
    let formPayLoad = {
      employee: {
        last_name: this.state.employee.lastName,
        first_name: this.state.employee.firstName,
        middle_initial: this.state.employee.middleInitial,
        other_last_names: this.state.employee.otherLastNames,
        street_number_name: this.state.employee.street,
        apt: this.state.employee.apt,
        city: this.state.employee.city,
        state: this.state.employee.state,
        zip_code: this.state.employee.zipCode,
        date_of_birth: this.state.employee.birthDate,
        email: this.state.employee.email,
        telephone: this.state.employee.phone
      }
    }
    fetch('/api/v1/employees', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayLoad),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      browserHistory.push(`/employees/${body.employee_id}`)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  handleClear(event) {
    event.preventDefault()
    this.setState({
      employee: {
        lastName: '',
        firstName: '',
        middleInitial: '',
        otherLastNames: '',
        street: '',
        apt: '',
        city: '',
        state: '',
        zipCode: '',
        birthDate: '',
        email: '',
        phone: ''
      },
      errors: {}
    })
  }

  render() {

    let errorListItems;
    let errorDiv;

    if (Object.keys(this.state.errors).length > 0) {
      errorListItems = Object.values(this.state.errors).map((error) => {
        return <li key={error}>{error}</li>
      })
      errorDiv = <div className="errors">{ errorListItems }</div>
    }

    return(
      <div className="employee-form">

        <div className="employee-form-title">
          <h3>Employment Eligibility Verification</h3>

          <h4>Section 1. Employee Information</h4>
        </div>

        { errorDiv }

        <form className="employee-form">
          <div>
            <label>Last Name</label>
            <input onChange={ this.handleChange } type='text' name='lastName' value={ this.state.employee.lastName }/>
          </div>

          <div>
            <label>First Name</label>
            <input onChange={ this.handleChange } type='text' name='firstName' value={ this.state.employee.firstName }/>
          </div>

          <div>
            <label>Middle Initial</label>
            <input onChange={ this.handleChange } type='text' name='middleInitial' value={ this.state.employee.middleInitial }/>
          </div>

          <div>
            <label>Other Last Names</label>
            <input onChange={ this.handleChange } type='text' name='otherLastNames' value={ this.state.employee.otherLastNames }/>
          </div>

          <div>
            <label>Street Number And Name</label>
            <input onChange={ this.handleChange } type='text' name='street' value={ this.state.employee.street }/>
          </div>

          <div>
            <label>Apt</label>
            <input onChange={ this.handleChange } type='text' name='apt' value={ this.state.employee.apt }/>
          </div>

          <div>
            <label>City</label>
            <input onChange={ this.handleChange } type='text' name='city' value={ this.state.employee.city }/>
          </div>

          <div>
            <label>State</label>
            <input onChange={ this.handleChange } type='text' name='state' value={ this.state.employee.state }/>
          </div>

          <div>
            <label>Zip Code</label>
            <input onChange={ this.handleChange } type='text' name='zipCode' value={ this.state.employee.zipCode }/>
          </div>

          <div>
            <label> Date of Birth</label>
            <input onChange={ this.handleChange } type='date' name='birthDate' value={ this.state.employee.birthDate }/>
          </div>

          <div>
            <label>Email</label>
            <input onChange={ this.handleChange } type='text' name='email' value={ this.state.employee.email }/>
          </div>

          <div>
            <label>Telephone</label>
            <input onChange={ this.handleChange } type='text' name='phone' value={ this.state.employee.phone }/>
          </div>

          <button className='button' onClick={ this.handleSubmit }>Submit</button>
          <button className='button' onClick={ this.handleClear }>Clear Form</button>

        </form>

      </div>
    )
  }
}

export default EmployeeForm;
