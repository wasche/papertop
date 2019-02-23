// @flow
import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '12px',
    alignItems: 'baseline',
    margin: '12px 0',
  },
  name: {
    marginRight: '12px',
  },
  sex: {
    margin: '0 3px',
  },
  text: {
    margin: '0 8px',
  },
}))

const Summary = () => {
  const classes = useStyles()
  return (
    <Card>
      <CardContent>
        <Typography color='textSecondary'>Summary</Typography>
        <Grid container alignItems='baseline'>
          <TextField
            label='Name'
            id='name'
            InputProps={{ error: true }}
            className={classes.name}
          />
          {'('}
          <FormControl className={classes.sex}>
            <InputLabel htmlFor='sex'>Sex</InputLabel>
            <Select
              inputProps={{
                name: 'sex',
                id: 'sex',
              }}
              error
              value={''}
            >
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
              <MenuItem value='other'>Other</MenuItem>
            </Select>
          </FormControl>
          {')'}
          <Typography inline component='p' className={classes.text}>is a(n)</Typography>
          <TextField
            label='adjective'
            id='adjective1'
            InputProps={{ error: true }}
          />
          <Typography inline component='p' className={classes.text}>,</Typography>
          <TextField
            label='adjective'
            id='adjective2'
            InputProps={{ error: true }}
          />
          <Typography inline component='p' className={classes.text}>{' '}</Typography>
          <TextField
            label='Profession'
            id='profession'
            InputProps={{ error: true }}
          />
          <Typography inline component='p' className={classes.text}>.</Typography>
        </Grid>
      </CardContent>
    </Card>
  )
}
export default Summary
