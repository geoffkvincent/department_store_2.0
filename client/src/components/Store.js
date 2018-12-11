import React from 'react'
import axios from 'axios'

class Store extends React.Component {
  state = { departments: [] }

  componentDidMount() {
    axios.get('api/departments')
      .then(res => this.setState({ departments: res.data }))
  }

  render() {
    return (
      <div>
        {this.state.departments.map(d => (
          <h1 key={d.id}>{d.name}</h1>
            )
        )}
      </div>
    )
  }
}

export default Store