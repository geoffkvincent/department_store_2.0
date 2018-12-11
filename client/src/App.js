import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Store from './components/Store'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Store}/>
    </Switch>
  </>
)

export default App