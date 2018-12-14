import React from 'react'
import axios from 'axios'
import { Form } from 'semantic-ui-react'

class ItemForm extends React.Component {
  state = {name: '', description: '', qty: '', price: ''}

  render() {
    const { name, description, qty, price} = this.state
    return (
      <Form>
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
      </Form>
    )
  }
}

export default ItemForm