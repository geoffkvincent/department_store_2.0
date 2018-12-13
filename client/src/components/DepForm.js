import React from 'react'
import { Form } from 'semantic-ui-react'

class DepForm extends React.Component {
  state = { name: '', description: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    const {name, description} = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          placeholder="Department"
          label="Product:"
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
          Create
        </Form.Button>
      </Form>
    )
  }
}

export default DepForm