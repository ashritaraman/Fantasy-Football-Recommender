import React, { Component } from 'react'
import { Menu, Sticky } from 'semantic-ui-react'

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Sticky>
        <Menu stackable>
          <Menu.Item>
            <img src='https://react.semantic-ui.com/logo.png' />
          </Menu.Item>

          <Menu.Item
            name='features'
            active={activeItem === 'features'}
            onClick={this.handleItemClick}
          >
            Features
        </Menu.Item>

          <Menu.Item
            name='testimonials'
            active={activeItem === 'testimonials'}
            onClick={this.handleItemClick}
          >
            Testimonials
        </Menu.Item>

          <Menu.Item
            name='sign-in'
            active={activeItem === 'sign-in'}
            onClick={this.handleItemClick}
          >
            Sign-in
        </Menu.Item>
        </Menu>
      </Sticky>
    )
  }
}