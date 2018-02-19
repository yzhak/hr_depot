import React, { Component } from 'react'

import ButtonContainer from './ButtonContainer'
import Form from './Form'

class ButtonsAndFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      i9: {},
      employment_auth_docs: [],
      renderForm: false,
      renderSubmit: 'noRenderSubmit', // 'renderSubmitInAdd', 'renderSubmitInEdit'
      message: ''
    }
    this.handleAddI9 = this.handleAddI9.bind(this)
    this.handleViewI9 = this.handleViewI9.bind(this)
    this.handleEditI9 = this.handleEditI9.bind(this)
    this.handleDelI9 = this.handleDelI9.bind(this)
    this.addSubmission = this.addSubmission.bind(this)
    this.editSubmission = this.editSubmission.bind(this)
  }

  componentDidMount() {
    let id = this.props.employeeId
    fetch(`/api/v1/employees/${id}/i9s.json`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => {
        return response.json()
      })
      .then(body => {
        this.setState({
          i9: body.i9,
          employment_auth_docs: body.employment_auth_docs
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleAddI9(event) {
    this.setState({
      renderForm: true,
      renderSubmit: 'renderSubmitInAdd',
      message: ''
    })
  }

  handleViewI9(event) {
    let id = this.props.employeeId
    fetch(`/api/v1/employees/${id}/i9s.json`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => {
        return response.json()
      })
      .then(body => {
        this.setState({
          i9: body.i9,
          employment_auth_docs: body.employment_auth_docs,
          renderForm: true,
          renderSubmit: 'noRenderSubmit',
          message: ''
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleEditI9(event) {
    let id = this.props.employeeId
    fetch(`/api/v1/employees/${id}/i9s.json`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => {
        return response.json()
      })
      .then(body => {
        this.setState({
          i9: body.i9,
          employment_auth_docs: body.employment_auth_docs,
          renderForm: true,
          renderSubmit: 'renderSubmitInEdit',
          message: ''
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleDelI9(event) {
    let id = this.state.i9.id
    fetch(`/api/v1/i9s/${id}.json`, {
      method: 'DELETE',
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      this.setState({
        i9: body.i9,
        employment_auth_docs: body.employment_auth_docs,
        renderForm: false,
        message: body.message
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  addSubmission(formPayLoad) {
    let id = this.props.employeeId
    fetch(`/api/v1/employees/${id}/i9s.json`, {
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
        i9: body.i9,
        employment_auth_docs: body.employment_auth_docs,
        renderForm: false,
        message: body.message
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  editSubmission(formPayLoad) {
    let id = this.state.i9.id
    fetch(`/api/v1/i9s/${id}.json`, {
      credentials: 'same-origin',
      method: 'PATCH',
      body: JSON.stringify(formPayLoad),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      this.setState({
        i9: body.i9,
        employment_auth_docs: body.employment_auth_docs,
        renderForm: false,
        message: body.message
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let formReactComponent = null;
    if (this.state.renderForm) {
      formReactComponent = <Form
        addNewSubmission={ this.addSubmission }
        editNewSubmission={ this.editSubmission }
        i9={ this.state.i9 }
        employment_auth_docs={ this.state.employment_auth_docs }
        renderSubmit={ this.state.renderSubmit }
      />
    }

    return(
      <div>
        <ButtonContainer
          lengthI9={ Object.keys(this.state.i9).length }
          handleAddI9={ this.handleAddI9 }
          handleViewI9={ this.handleViewI9 }
          handleEditI9={ this.handleEditI9 }
          handleDelI9={ this.handleDelI9 }
        />
        <h5>{ this.state.message }</h5>
        { formReactComponent }
      </div>
    )
  }
}

export default ButtonsAndFormContainer
