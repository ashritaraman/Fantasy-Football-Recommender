import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import Dropdown from './Dropdown.js'
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'



class FormExampleSubcomponentControl extends Component {
  state = {}



  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Segment basic padded='very'>
        <Header as='h2' textAlign='center'>Team Selection Form</Header>
        <Form>
          <Grid columns={2} padded>
            <Grid.Column><Form.Field label="Choose 1 Captain" control={Dropdown} /></Grid.Column>
            <Grid.Column><Form.Field label="Choose 1 Vice Captain" control={Dropdown} /></Grid.Column>
            <Grid.Column><Form.Field label="Choose 2 Goal Keepers" control={Dropdown} /></Grid.Column>
            <Grid.Column><Form.Field label="Choose 4 Defense" control={Dropdown} /></Grid.Column>
            <Grid.Column><Form.Field label="Choose 4 Midfielders" control={Dropdown} /></Grid.Column>
            <Grid.Column><Form.Field label="Choose 3 Forwards" control={Dropdown} /></Grid.Column>


            <Form.Button>Submit</Form.Button>
          </Grid>
        </Form>
      </Segment>
    )
  }
}

export default FormExampleSubcomponentControl