import React, { Component } from 'react'

class WhitelistForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      whitelistedUser: {
        companyName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: ''
      },
      errors: {},
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.setFormDetail = this.setFormDetail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateField = this.validateField.bind(this)
    this.validatePassword = this.validatePassword.bind(this)
    this.handleFormPayload = this.handleFormPayload.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleChange(event) {
    let fieldName = event.target.name
    let input = event.target.value
    this.setFormDetail(fieldName, input)
  }

  setFormDetail(key, value) {
    let oldState = this.state.whitelistedUser
    let newState = Object.assign({}, oldState)
    newState[key] = value
    this.setState({
      whitelistedUser: newState
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.validateField("company_name", this.state.whitelistedUser.companyName)
    this.validateField("first_name", this.state.whitelistedUser.firstName)
    this.validateField("last_name", this.state.whitelistedUser.lastName)
    this.validateField("email", this.state.whitelistedUser.email)
    this.validateField("password", this.state.whitelistedUser.password)
    this.validatePassword("password_confirmation", this.state.whitelistedUser.passwordConfirm, this.state.whitelistedUser.password)
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

  validatePassword(fieldName, input1, input2) {
    let formattedFieldName = fieldName.replace(/_/, " ")
    if (input1 !== input2) {
      let newError = { [fieldName]: `You must provide a matching ${formattedFieldName}` }
      this.setState({ errors: Object.assign(this.state.errors, newError)})
    } else {
      let errorState = this.state.errors
      delete errorState[fieldName]
      this.setState({ errors: errorState })
    }
  }

  handleFormPayload() {
    let formPayLoad = {
      company: {
        name: this.state.whitelistedUser.companyName
      },
      user: {
        first_name: this.state.whitelistedUser.firstName,
        last_name: this.state.whitelistedUser.lastName,
        email: this.state.whitelistedUser.email,
        password: this.state.whitelistedUser.password
      }
    }
    fetch(`/api/v1/users.json`, {
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
      this.setState({
        whitelistedUser: {
          companyName: body.company.name,
          firstName: body.user.first_name,
          lastName: body.user.last_name,
          email: body.user.email,
          password: body.user.password,
          passwordConfirm: ''
        },
        message: body.message
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  handleClear(event) {
    event.preventDefault()
    this.setState({
      whitelistedUser: {
        companyName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: ''
      },
      errors: {},
      message: ''
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
      <div>

        { errorDiv }

        <form>

          <div>
            <label>Company Name</label>
            <input onChange={ this.handleChange } type='text' name='companyName' value={ this.state.whitelistedUser.companyName }/>
          </div>

          <div>
            <label>First Name</label>
            <input onChange={ this.handleChange } type='text' name='firstName' value={ this.state.whitelistedUser.firstName }/>
          </div>

          <div>
            <label>Last Name</label>
            <input onChange={ this.handleChange } type='text' name='lastName' value={ this.state.whitelistedUser.lastName }/>
          </div>

          <div>
            <label>Email</label>
            <input onChange={ this.handleChange } type='text' name='email' value={ this.state.whitelistedUser.email }/>
          </div>

          <div>
            <label>Password</label>
            <input onChange={ this.handleChange } type='text' name='password' value={ this.state.whitelistedUser.password }/>
          </div>

          <div>
            <label>Confirm Password</label>
            <input onChange={ this.handleChange } type='text' name='passwordConfirm' value={ this.state.whitelistedUser.passwordConfirm }/>
          </div>

          <button className='button' id='submit' onClick={ this.handleSubmit }>Submit</button>
          <button className='button' id='clear' onClick={ this.handleClear }>Clear</button>

        </form>
        <h5>{ this.state.message }</h5>
      </div>
    )
  }
}

export default WhitelistForm;
