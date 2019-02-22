// @flow
import React from 'react'
import { Route } from 'react-router-dom'

import AppBar from './AppBar'

import SinglePaper from '@tools/single-paper/router'

const App = () => {
  return (
    <div>
      <AppBar/>
      <Route path='/single-paper' component={SinglePaper}/>
    </div>
  )
}
export default App
