// @flow
import React from 'react'

import Grid from '@material-ui/core/Grid'

import Summary from './Summary'
import Skills from './Skills'

const CharacterSheet = () => (
  <div>
    <Grid container direction='column' spacing={8}>
      <Grid item>
        <Summary/>
      </Grid>
      <Grid item>
        <Grid
          container
          direction='row'
          spacing={8}
        >
          <Grid item>
            <Skills/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
)
export default CharacterSheet
