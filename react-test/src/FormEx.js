import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import DropdownGK from "./DropdownGK.js";
import DropdownDEF from "./DropdownDEF.js";
import DropdownMID from "./DropdownMID.js";
import DropdownFWD from "./DropdownFWD.js";
import { Container, Divider, Grid, Header, Image } from "semantic-ui-react";
import { Segment } from "semantic-ui-react";
import { Button, Modal } from "semantic-ui-react";
import { Dropdown } from 'semantic-ui-react'
import Players from './player_gk.json'

class FormExampleSubcomponentControl extends Component {
  state = {
    goalkeeper1: "",
    goalkeeper2: "",
    styles: {
      position: "relative",
    },
  }


  // onUpdateItems = (e, index) => {
  //   const list = this.state.list;
  //   //list[index] = e.target.value;
  //   this.setState({
  //     list
  //   });
  // };
  // onUpdateItems = (event) => {
  //   // this.setState(state => {
  //   //   const list = state.list.map(item => item + 1);
  //   //   return {
  //   //     list,
  //   //   };
  //   // });

  // };


  handleChange1 = (event, data) => {
    this.setState({ goalkeeper1: data.value });
  }
  handleChange2 = (event, data) => {
    this.setState({ goalkeeper2: data.value });
  }


  render() {
    const { value } = this.state;
    return (
      <Container>
        <Segment basic padded="very">
          <Header as="h2" textAlign="center">
            Team Selection Form
        </Header>
          <Form>
            <Grid columns={2} padded>
              <Grid.Column>
                <Form.Field label="Choose Goal Keeper 1" />
                <Dropdown
                  placeholder='Player'
                  fluid
                  search
                  selection
                  options={Players}
                  onChange={this.handleChange1}
                />
                <Form.Field label="Choose Goal Keeper 2" />
                <Dropdown
                  placeholder='Player'
                  fluid
                  search
                  selection
                  options={Players}
                  onChange={this.handleChange2}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field label="Choose 4 Defense" control={DropdownDEF} />
              </Grid.Column>
              <Grid.Column>
                <Form.Field label="Choose 4 Midfielders" control={DropdownMID} />
              </Grid.Column>
              <Grid.Column>
                <Form.Field label="Choose 3 Forwards" control={DropdownFWD} />
              </Grid.Column>

              <div>
                {
                  //<Form.Button>Submit</Form.Button>
                }
              </div>
            </Grid>
          </Form>
        </Segment>
        <Segment basic>
          <Modal
            trigger={
              <div id="button">
                <Button style={this.state.styles} color="blue">
                  Submit
        </Button>
              </div>
            }>

            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
              <Image wrapped size="medium" src="/images/avatar/large/rachel.png" />
              <Modal.Description>
                <Header>Score of the team you picked </Header>
                <p>{this.state.goalkeeper1}</p>
                <p>{this.state.goalkeeper2}</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Segment>
      </Container>
    );
  }
}

export default FormExampleSubcomponentControl;

