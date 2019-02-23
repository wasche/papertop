// @flow
import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

import Skill from './Skill'

const Skills = () => {
  return (
    <Card>
      <CardContent>
        <List subheader={<ListSubheader>Skills</ListSubheader>}>
          <Skill id='0'/>
        </List>
      </CardContent>
    </Card>
  )
}
export default Skills
