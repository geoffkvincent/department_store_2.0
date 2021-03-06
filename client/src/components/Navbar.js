import React from 'react'
import {NavLink} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

const Navbar = () => (
  <Menu>
    <Menu.Item>
      <NavLink exact to="/">
        Store
      </NavLink>
    </Menu.Item>
  </Menu>
)

export default Navbar