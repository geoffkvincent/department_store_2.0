import React from 'react'
import axios from 'axios'
import { Form } from 'semantic-ui-react'

class ItemForm extends React.Component {
  state = {name: '', description: '', qty: '', price: ''}

  componentDidMount() {
    
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {id} = this.props.match.params
    axios.post(`/api/departments/${id}/items`, {...this.state})
      .then(this.props.history.push(`/`))
  }

  render() {
    const { name, description, qty, price} = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='name'
          placeholder='Item'
          label='Item'
          value={name}
          onChange={this.handleChange}
        />
        <Form.Input
          name='description'
          placeholder='description'
          label='Description'
          value={description}
          onChange={this.handleChange}
        />
        <Form.Input
          name='qty'
          placeholder='Quantity'
          label='qty'
          value={qty}
          onChange={this.handleChange}
        />
        <Form.Input
          name='price'
          placeholder='00.00'
          label='$'
          value={price}
          onChange={this.handleChange}
        />
        <Form.Button>Create</Form.Button>
      </Form>
    )
  }
}

export default ItemForm