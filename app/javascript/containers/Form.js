import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: '',
      title: '',
      authority: '',
      number:'',
      expiration: ''
    }
    this.handleStatusChange = this.handleStatusChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleAuthorityChange = this.handleAuthorityChange.bind(this)
    this.handleNumberChange = this.handleNumberChange.bind(this)
    this.handleExpirationChange = this.handleExpirationChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleStatusChange(event) {
    this.setState({ status: event.target.value })
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  handleAuthorityChange(event) {
    this.setState({authority: event.target.value})
  }

  handleNumberChange(event) {
    this.setState({number: event.target.value})
  }

  handleExpirationChange(event) {
    this.setState({expiration: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      status: this.state.status,
      title: this.state.title,
      authority: this.state.authority,
      number: this.state.number,
      expiration: this.state.expiration
    }
    this.props.addNewSubmission(formPayload);
  }

  render() {

    return(
      <div>
        <h4>I attest that I am (choose one of the following)</h4>
        <div>
          <select onChange={ this.handleStatusChange } name='status' value={ this.status }>
            <option value='A citizen of the United States'></option>
            <option value='A noncitizen national of the United States'></option>
            <option value='A lawful permanent resident'></option>
            <option value='An alien authorized to work with USCIS number'></option>
            <option value='An alien authorized to work with I-94 admission number'></option>
            <option value='An alien authorized to work with foreign passport number'></option>
          </select>
        </div>

        <h4><b>Section 2.</b> Employer or Authorized Representative Review and Verification</h4>

        <form>
          <div>
            <label>Document Title</label>
            <input onChange={ this.handleTitleChange } type='text' name='title' value={ this.title }/>
          </div>

          <div>
            <label>Issuing Authority</label>
            <input onChange={ this.handleAuthorityChange } type='text' name='authority' value={ this.authority }/>
          </div>

          <div>
            <label>Document Number</label>
            <input onChange={ this.handleNumberChange } type='text' name='number' value={ this.number }/>
          </div>

          <div>
            <label>Expiration Date</label>
            <input onChange={ this.handleExpirationChange } type='date' name='expiration' value={ this.expiration }/>
          </div>

          <button className='button' onClick={ this.handleSubmit }>Submit</button>
        </form>

      </div>
    )
  }
}

export default Form;
