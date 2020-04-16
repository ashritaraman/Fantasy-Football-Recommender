import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import Dropdown from './Dropdown.js'
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'


class FormExampleSubcomponentControl extends Component {
  state = {}



  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (

      <Form>
        <Grid columns={2}>
          <Grid.Column><Form.Field label="Choose 2 Goal Keepers" control={Dropdown} /></Grid.Column>
          <Grid.Column><Form.Field label="Choose 4 Defense" control={Dropdown} /></Grid.Column>
          <Grid.Column><Form.Field label="Choose 4 Midfielders" control={Dropdown} /></Grid.Column>
          <Grid.Column><Form.Field label="Choose 3 Forwards" control={Dropdown} /></Grid.Column>
        </Grid>

        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default FormExampleSubcomponentControl