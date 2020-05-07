import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'

const ProjectDescription = () => (
  <Segment basic padded='very'>
    <Container text>
      <Header as='h2' textAlign='center'>Choose your fantasy soccer team!</Header>
      <p>
        Welcome to our Fantasy Soccer Team Predictor! Let's see if you can
        pick a team to beat our AI! You can pick your own fantasy soccer team based on a particular game week. We
        will show your team's score and compare it to our AI's team! A
        team is made up of 2 Goal Keepers, 4 Defenders, 4 Midfielders, and 3 Forwards.
        You can pick a team for a particular game week and see how your team does for that game week. You
        need to select a gameweek and your team, and when you click submit,
        you can see how your team does compared to our AI. We have a table below
        to give you player information! You can select a gameweek to see the player's
        scores from the previous week. In the table, you can see we show the player's name,
        team, position, and their away and home scores from the previous week selected
        based on the filter. Check out the team information in the table and go select your team!
        See if you can beat our AI!
    </p>
    </Container>
  </Segment>
)

export default ProjectDescription