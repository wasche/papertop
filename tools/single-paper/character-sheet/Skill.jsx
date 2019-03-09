// @flow
import React, { useState } from 'react'

import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: 0,
  },
  ranks: {
    margin: '0 8px',
    maxWidth: '4em',
  },
  attr: {
    margin: '0 8px',
    minWidth: '5em',
  },
}))

type Props = {
  id: string
}

const Skill = ({ id }: Props) => {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [ranks, setRanks] = useState(0)
  const [attr, setAttr] = useState('')
  return (
    <ListItem className={classes.wrapper}>
      <Grid container alignItems='baseline' wrap='nowrap'>
        <TextField
          id={`skill-${id}`}
          placeholder='skill name'
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <TextField
          label='ranks'
          id={`skill-${id}-ranks`}
          type='number'
          className={classes.ranks}
          value={ranks}
          onChange={event => setRanks(+event.target.value)}
        />
        {'+'}
        <FormControl className={classes.attr}>
          <InputLabel htmlFor={`skill-${id}-attribute`}>Attribute</InputLabel>
          <Select
            inputProps={{
              name: `skill-${id}-attribute`,
              id: `skill-${id}-attribute`,
            }}
            value={attr}
            onChange={(event) => setAttr(event.target.value)}
          >
            <MenuItem value='might'>Might</MenuItem>
            <MenuItem value='mental'>Mental</MenuItem>
            <MenuItem value='speed'>Speed</MenuItem>
          </Select>
        </FormControl>
        {'='}
        <ListItemText primary='0'/>
      </Grid>
    </ListItem>
  )
}

export default Skill
