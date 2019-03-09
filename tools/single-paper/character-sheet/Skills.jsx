// @flow
import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'

import Skill from './Skill'

const Skills = () => {
  return (
    <Card>
      <CardContent>
        <Typography color='textSecondary'>Skills</Typography>
        <List>
          <Skill id='0'/>
          <Skill id='1'/>
          <Skill id='2'/>
        </List>
      </CardContent>
    </Card>
  )
}
export default Skills
