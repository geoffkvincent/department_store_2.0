import React from 'react'
import { Form, Header } from 'semantic-ui-react'
import axios from 'axios'

class DepForm extends React.Component {
  state = { name: '', description: '' }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id) {
      axios.get(`/api/departments/${id}`)
        .then(res => this.setState({...res.data}))
    }

  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { id } = this.props.match.params
    if (id) {
      axios.put(`/api/departments/${id}`), {}
        .then( res => this.props.history.push(`/departments/${res.data.id}`))
    } else {
      axios.post(('/api/departments'), {...this.state})
        .then( res => this.props.history.push(`/departments/${res.data.id}`))
    }
  }

  render() {
    const {name, description} = this.state
    const { id } = this.props.match.params
    return (
      <>
        <Header>{id ? "Edit Department" : "New Department"}</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name="name"
            placeholder="Department"
            label="Department:"
            value={name}
            onChange={this.handleChange}
            />
          <Form.Input
            name="description"
            placeholder="Description"
            label="Description:"
            value={description}
            onChange={this.handleChange}
            />
          <Form.Button color="green">
            {id ? "Edit" : "Create"}
          </Form.Button>
        </Form>
      </>
    )
  }
}

export default DepForm