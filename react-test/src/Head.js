import React, { Component } from 'react'
import { Button, Dimmer, Image, Container, Label } from 'semantic-ui-react'
import pic from './pic.png';


export default class Head extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state
    const content = (
      <div>
        <Button color='teal' size="massive">Pick Your Team</Button>
      </div>
    )

    return (
      <Container>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          blurring
          inverted
          size='fluid'
          src={pic}
        />
        <Dimmer inverted />
      </Container>
    )
  }
}