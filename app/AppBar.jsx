// @flow
import React, { useState } from 'react'

import { Link as RouterLink } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MenuIcon from '@material-ui/icons/Menu'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const [panel, setPanel] = useState(null)
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton
          color='inherit'
          onClick={event => setOpen(true)}
          aria-label='Menu'
          aria-owns={open ? 'menu' : undefined}
          aria-haspopup='true'
        >
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          id='menu'
          open={open}
          onOpen={() => {}}
          onClose={() => setOpen(false)}
        >
          <ExpansionPanelSummary>
            <Typography>Home</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanel
            expanded={panel === 'single-paper'}
            onChange={(_, expanded) => setPanel(expanded ? 'single-paper' : null)}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>single-paper</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <Link
                  component={RouterLink}
                  color='inherit'
                  variant='inherit'
                  to='/single-paper/character-sheet'
                >
                  Character Sheet
                </Link>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </SwipeableDrawer>
        <Typography variant='h6' color='inherit'>
          Home
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default Nav
