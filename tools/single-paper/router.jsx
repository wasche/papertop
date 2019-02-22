// @flow
import React from 'react'

import { Route } from 'react-router-dom'

import CharacterSheet from './character-sheet/CharacterSheet'

const Router = () => (
  <Route path='/single-paper/character-sheet' component={CharacterSheet}/>
)
export default Router
