import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import Dropdown from './Dropdown.js'


class FormExampleSubcomponentControl extends Component {
  state = {}



  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field label="Choose 2 Goal Keepers" control={Dropdown} />
          <Form.Field label="Choose 4 Defense" control={Dropdown} />
          <Form.Field label="Choose 4 Midfielders" control={Dropdown} />
          <Form.Field label="Choose 3 Forwards" control={Dropdown} />
        </Form.Group>

        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default FormExampleSubcomponentControl