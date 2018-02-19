import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: this.props.i9.status,
      title: (this.props.employment_auth_docs.length === 0) ? '' : this.props.employment_auth_docs[0].title,
      authority: (this.props.employment_auth_docs.length === 0) ? '' : this.props.employment_auth_docs[0].issuing_authority,
      number: (this.props.employment_auth_docs.length === 0) ? '' : this.props.employment_auth_docs[0].number,
      expiration: (this.props.employment_auth_docs.length === 0) ? '' : this.props.employment_auth_docs[0].expiration,
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.validateField = this.validateField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    let fieldName = event.target.name
    let input = event.target.value

    if (this.props.renderSubmit !== 'noRenderSubmit') {
      this.setState({ [fieldName]: input })
    }
  }

  validateField(fieldName, input) {
    if (input === '' || input === ' ') {
      let newError = { [fieldName]: `You must provide a valid ${fieldName}` }
      this.setState({ errors: Object.assign(this.state.errors, newError)})
    }
    else {
      let errorState = this.state.errors
      delete errorState[fieldName]
      this.setState({ errors: errorState })
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    this.validateField('status', this.state.status)
    this.validateField('title', this.state.title)
    this.validateField('authority', this.state.authority)
    this.validateField('number', this.state.number)
    this.validateField('expiration', this.state.expiration)

    let errors = this.state.errors

    if (Object.keys(errors).length === 0) {
      let formPayLoad = {
        i9: {
          status: this.state.status
        },
        employment_auth_doc: {
          title: this.state.title,
          issuing_authority: this.state.authority,
          number: this.state.number,
          expiration: this.state.expiration
        }
      }
      if (this.props.renderSubmit === 'renderSubmitInAdd') {
        this.props.addNewSubmission(formPayLoad)
      } else {
        this.props.editNewSubmission(formPayLoad)
      }
    }
  }

  render() {
    let errorListItems;
    let errorDiv;

    if(Object.keys(this.state.errors).length > 0) {
      errorListItems = Object.values(this.state.errors).map((error) => {
        return <li key={error}>{error}</li>
      })
      errorDiv = <div className="errors">{ errorListItems }</div>
    }

    let submitButton = null;
    if (this.props.renderSubmit !== 'noRenderSubmit') {
      submitButton = <button className='form-buttons' onClick={ this.handleSubmit }>Submit</button>
    }

    return(
      <div>
        { errorDiv }
        <h4>I attest that I am (choose one of the following)</h4>
        <div>
          <select onChange={ this.handleChange } name='status' value={ this.state.status }>
            <option value=''></option>
            <option value='us_citizen'>A citizen of the United States</option>
            <option value='us_national'>A noncitizen national of the United States</option>
            <option value='permanent_resident'>A lawful permanent resident</option>
            <option value='authorized_alien_uscis_num'>An alien authorized to work with USCIS number</option>
            <option value='authorized_alien_i94_num'>An alien authorized to work with I-94 admission number</option>
            <option value='authorized_alien_passport_num'>An alien authorized to work with foreign passport number</option>
          </select>
        </div>

        <h4><b>Section 2.</b> Employer or Authorized Representative Review and Verification</h4>

        <form>
          <div>
            <label>Document Title</label>
            <input onChange={ this.handleChange } type='text' name='title' value={ this.state.title }/>
          </div>

          <div>
            <label>Issuing Authority</label>
            <input onChange={ this.handleChange } type='text' name='authority' value={ this.state.authority }/>
          </div>

          <div>
            <label>Document Number</label>
            <input onChange={ this.handleChange } type='text' name='number' value={ this.state.number }/>
          </div>

          <div>
            <label>Expiration Date</label>
            <input onChange={ this.handleChange } type='date' name='expiration' value={ this.state.expiration }/>
          </div>

          { submitButton }
        </form>

      </div>
    )
  }
}

export default Form;
