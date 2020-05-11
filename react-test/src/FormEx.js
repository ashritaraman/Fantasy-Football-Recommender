import React, { Component } from "react";
import {
  Form,
  Container,
  Grid,
  Header,
  Image,
  Button,
  Modal,
  Message,
  Dropdown,
  Segment,
} from "semantic-ui-react";
import PlayersGK from "./player_gk.json";
import PlayersDef from "./player_def.json";
import PlayersFwd from "./player_fwd.json";
import PlayersMid from "./player_mid.json";
import PlayerScores from "./combined_gw_2.json";
import PlayerValues from "./combined_gw_3.json";
import ModalPic from "./modal_pic.png";

class FormExampleSubcomponentControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goalkeeper1: "",
      goalkeeper2: "",
      defender1: "",
      defender2: "",
      defender3: "",
      defender4: "",
      midfielder1: "",
      midfielder2: "",
      midfielder3: "",
      midfielder4: "",
      forward1: "",
      forward2: "",
      forward3: "",
      gameWeek: 1,
      score: 0,
      value: 0,
      noneError: true,
      valueError: true,
      formError: true,
      samePlayerError: true,
      errorMessage: "hi",
      styles: {
        position: "relative",
        left: 500,
        right: 10,
        bottom: 30,
      },
    };
  }

  // submitForm(){
  // if (this.state.value >= 1000) {
  //   this.setState({valueError: true})
  //   error = true
  // } else {
  //   this.setState({valueError: false})
  //   error = false
  // };

  handleChange1 = (event, data) => {
    this.setState({ goalkeeper1: data.value });
  };

  handleChange2 = (event, data) => {
    this.setState({ goalkeeper2: data.value });
  };

  handleChangeDef1 = (event, data) => {
    this.setState({ defender1: data.value });
  };

  handleChangeDef2 = (event, data) => {
    this.setState({ defender2: data.value });
  };

  handleChangeDef3 = (event, data) => {
    this.setState({ defender3: data.value });
  };

  handleChangeDef4 = (event, data) => {
    this.setState({ defender4: data.value });
  };

  handleChangeMid1 = (event, data) => {
    this.setState({ midfielder1: data.value });
  };
  handleChangeMid2 = (event, data) => {
    this.setState({ midfielder2: data.value });
  };
  handleChangeMid3 = (event, data) => {
    this.setState({ midfielder3: data.value });
  };
  handleChangeMid4 = (event, data) => {
    this.setState({ midfielder4: data.value });
  };

  handleChangeForw1 = (event, data) => {
    this.setState({ forward1: data.value });
  };
  handleChangeForw2 = (event, data) => {
    this.setState({ forward2: data.value });
  };
  handleChangeForw3 = (event, data) => {
    this.setState({ forward3: data.value });
  };

  handleChangeGW = (event) => {
    this.setState({ gameWeek: event.target.value });
  };

  onSubmit = (event) => {
    let error = false;
    var results = 0;
    var vals = 0;
    //for goalkeeper 1
    const player_scores = PlayerScores;
    const player_values = PlayerValues;
    var team_list = [];
    team_list.push(this.state.goalkeeper1);
    team_list.push(this.state.goalkeeper2);
    team_list.push(this.state.defender1);
    team_list.push(this.state.defender2);
    team_list.push(this.state.defender3);
    team_list.push(this.state.defender4);
    team_list.push(this.state.midfielder1);
    team_list.push(this.state.midfielder2);
    team_list.push(this.state.midfielder3);
    team_list.push(this.state.midfielder4);
    team_list.push(this.state.forward1);
    team_list.push(this.state.forward2);
    team_list.push(this.state.forward3);
    for (var i = 0; i < player_scores.length; i++) {
      var player = player_scores[i];
      var player1 = player_values[i];
      if (team_list.includes(player.name)) {
        if (Number(this.state.gameWeek) == 1) {
          results +=
            Number(player.team_a_score_1) + Number(player.team_h_score_1);
          vals += Number(player1.value_1);
        }
        if (Number(this.state.gameWeek) == 2) {
          results +=
            Number(player.team_a_score_2) + Number(player.team_h_score_2);
          vals += Number(player1.value_2);
        }
        if (Number(this.state.gameWeek) == 3) {
          results +=
            Number(player.team_a_score_3) + Number(player.team_h_score_3);
          vals += Number(player1.value_3);
        }
        if (Number(this.state.gameWeek) == 4) {
          results +=
            Number(player.team_a_score_4) + Number(player.team_h_score_4);
          vals += Number(player1.value_4);
        }
        if (Number(this.state.gameWeek) == 5) {
          results +=
            Number(player.team_a_score_5) + Number(player.team_h_score_5);
          vals += Number(player1.value_5);
        }
        if (Number(this.state.gameWeek) == 6) {
          results +=
            Number(player.team_a_score_6) + Number(player.team_h_score_6);
          vals += Number(player1.value_6);
        }
        if (Number(this.state.gameWeek) == 7) {
          results +=
            Number(player.team_a_score_7) + Number(player.team_h_score_7);
          vals += Number(player1.value_7);
        }
        if (Number(this.state.gameWeek) == 8) {
          results +=
            Number(player.team_a_score_8) + Number(player.team_h_score_8);
          vals += Number(player1.value_8);
        }
        if (Number(this.state.gameWeek) == 9) {
          results +=
            Number(player.team_a_score_9) + Number(player.team_h_score_9);
          vals += Number(player1.value_9);
        }
        if (Number(this.state.gameWeek) == 10) {
          results +=
            Number(player.team_a_score_10) + Number(player.team_h_score_10);
          vals += Number(player1.value_10);
        }
        if (Number(this.state.gameWeek) == 11) {
          results +=
            Number(player.team_a_score_11) + Number(player.team_h_score_11);
          vals += Number(player1.value_11);
        }
        if (Number(this.state.gameWeek) == 12) {
          results +=
            Number(player.team_a_score_12) + Number(player.team_h_score_12);
          vals += Number(player1.value_12);
        }
        if (Number(this.state.gameWeek) == 13) {
          results +=
            Number(player.team_a_score_13) + Number(player.team_h_score_13);
          vals += Number(player1.value_13);
        }
        if (Number(this.state.gameWeek) == 14) {
          results +=
            Number(player.team_a_score_14) + Number(player.team_h_score_14);
          vals += Number(player1.value_14);
        }
        if (Number(this.state.gameWeek) == 15) {
          results +=
            Number(player.team_a_score_15) + Number(player.team_h_score_15);
          vals += Number(player1.value_15);
        }
        if (Number(this.state.gameWeek) == 16) {
          results +=
            Number(player.team_a_score_16) + Number(player.team_h_score_16);
          vals += Number(player1.value_16);
        }
        if (Number(this.state.gameWeek) == 17) {
          results +=
            Number(player.team_a_score_17) + Number(player.team_h_score_17);
          vals += Number(player1.value_17);
        }
        if (Number(this.state.gameWeek) == 18) {
          results +=
            Number(player.team_a_score_18) + Number(player.team_h_score_18);
          vals += Number(player1.value_18);
        }
        if (Number(this.state.gameWeek) == 19) {
          results +=
            Number(player.team_a_score_19) + Number(player.team_h_score_19);
          vals += Number(player1.value_19);
        }
        if (Number(this.state.gameWeek) == 20) {
          results +=
            Number(player.team_a_score_20) + Number(player.team_h_score_20);
          vals += Number(player1.value_20);
        }

        if (Number(this.state.gameWeek) == 21) {
          results +=
            Number(player.team_a_score_21) + Number(player.team_h_score_21);
          vals += Number(player1.value_21);
        }

        if (Number(this.state.gameWeek) == 22) {
          results +=
            Number(player.team_a_score_22) + Number(player.team_h_score_22);
          vals += Number(player1.value_22);
        }

        if (Number(this.state.gameWeek) == 23) {
          results +=
            Number(player.team_a_score_23) + Number(player.team_h_score_23);
          vals += Number(player1.value_23);
        }

        if (Number(this.state.gameWeek) == 24) {
          results +=
            Number(player.team_a_score_24) + Number(player.team_h_score_24);
          vals += Number(player1.value_24);
        }

        if (Number(this.state.gameWeek) == 25) {
          results +=
            Number(player.team_a_score_25) + Number(player.team_h_score_25);
          vals += Number(player1.value_25);
        }
        if (Number(this.state.gameWeek) == 26) {
          results +=
            Number(player.team_a_score_26) + Number(player.team_h_score_26);
          vals += Number(player1.value_26);
        }
        if (Number(this.state.gameWeek) == 27) {
          results +=
            Number(player.team_a_score_27) + Number(player.team_h_score_27);
          vals += Number(player1.value_27);
        }
        if (Number(this.state.gameWeek) == 28) {
          results +=
            Number(player.team_a_score_28) + Number(player.team_h_score_28);
          vals += Number(player1.value_28);
        }
        if (Number(this.state.gameWeek) == 29) {
          results +=
            Number(player.team_a_score_29) + Number(player.team_h_score_29);
          vals += Number(player1.value_29);
        }
        if (Number(this.state.gameWeek) == 30) {
          results +=
            Number(player.team_a_score_30) + Number(player.team_h_score_30);
          vals += Number(player1.value_30);
        }
        if (Number(this.state.gameWeek) == 31) {
          results +=
            Number(player.team_a_score_31) + Number(player.team_h_score_31);
          vals += Number(player1.value_31);
        }
        if (Number(this.state.gameWeek) == 32) {
          results +=
            Number(player.team_a_score_32) + Number(player.team_h_score_32);
          vals += Number(player1.value_32);
        }
        if (Number(this.state.gameWeek) == 33) {
          results +=
            Number(player.team_a_score_33) + Number(player.team_h_score_33);
          vals += Number(player1.value_33);
        }

        if (Number(this.state.gameWeek) == 34) {
          results +=
            Number(player.team_a_score_34) + Number(player.team_h_score_34);
          vals += Number(player1.value_34);
        }
        if (Number(this.state.gameWeek) == 35) {
          results +=
            Number(player.team_a_score_35) + Number(player.team_h_score_35);
          vals += Number(player1.value_35);
        }
        if (Number(this.state.gameWeek) == 36) {
          results +=
            Number(player.team_a_score_36) + Number(player.team_h_score_36);
          vals += Number(player1.value_36);
        }
        if (Number(this.state.gameWeek) == 37) {
          results +=
            Number(player.team_a_score_37) + Number(player.team_h_score_37);
          vals += Number(player1.value_37);
        }
        if (Number(this.state.gameWeek) == 38) {
          results +=
            Number(player.team_a_score_38) + Number(player.team_h_score_38);
          vals += Number(player1.value_38);
        }
      }
    }
    this.setState({ score: results });
    this.setState({ value: vals });
    if (this.state.gameWeek === 1 || this.state.goalkeeper1 === "" || this.state.goalkeeper2 === "" ||
      this.state.defender1 === "" || this.state.defender2 === "" || this.state.defender3 === "" || this.state.defender4 === "" ||
      this.state.midfielder1 === "" || this.state.midfielder2 === "" || this.state.midfielder3 === "" || this.state.midfielder4 === "" ||
      this.state.forward1 === "" || this.state.forward2 === "" || this.state.forward3 === ""
    ) {
      this.setState({ noneError: true });
    } else {
      this.setState({ noneError: false });
    }
    if (vals <= 1000) {
      this.setState({ valueError: false });
      error = false;
    } else {
      this.setState({ valueError: true });
      error = true;
    }
    if ((this.state.goalkeeper1 === this.state.goalkeeper2) ||
      (this.state.defender1 === this.state.defender2 || this.state.defender1 === this.state.defender3 ||
        this.state.defender1 === this.state.defender4 || this.state.defender2 === this.state.defender3
        || this.state.defender2 === this.state.defender4 || this.state.defender3 === this.state.defender4) ||
      (this.state.midfielder1 === this.state.midfielder2 || this.state.midfielder1 === this.state.midfielder3 ||
        this.state.midfielder1 === this.state.midfielder4 || this.state.midfielder2 === this.state.midfielder3
        || this.state.midfielder2 === this.state.midfielder4 || this.state.midfielder3 === this.state.midfielder4) ||
      (this.state.forward1 === this.state.forward2 || this.state.forward1 === this.state.forward3 ||
        this.state.forward2 === this.state.forward3)) {
      this.setState({ samePlayerError: true });
    } else {
      this.setState({ samePlayerError: false });

    }
    if (error) {
      this.setState({ formError: true });
      return;
    } else {
      this.setState({ formError: false });
    }
  };

  render() {
    const { value } = this.state;
    return (
      <Container>
        <Segment basic padded="very" color="purple">
          <Header as="h2" textAlign="center">
            Team Selection Form
          </Header>
          <Form warning>
            <Message warning>Please only choose a player once and make sure your team's total value doesn't exceed 1000!</Message>
            <Grid columns={4} padded>
              <Grid.Column>
                <Form.Field padded="very">
                  <label>Choose a Game Week Between 2-38</label>
                  <input
                    type="number"
                    placeholder="2"
                    min={2}
                    max={38}
                    onChange={this.handleChangeGW}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Goal Keeper 1</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersGK}
                    onChange={
                      this.handleChange1
                    }
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Goal Keeper 2</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersGK}
                    onChange={this.handleChange2}
                  />
                </Form.Field>
              </Grid.Column>

              <Grid.Column>
                <Form.Field padded="very">
                  <label>Choose Defender 1</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersDef}
                    onChange={this.handleChangeDef1}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Defender 2</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersDef}
                    onChange={this.handleChangeDef2}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Defender 3</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersDef}
                    onChange={this.handleChangeDef3}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Defender 4</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersDef}
                    onChange={this.handleChangeDef4}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field padded="very">
                  <label>Choose Midfielder 1</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersMid}
                    onChange={this.handleChangeMid1}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Midfielder 2</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersMid}
                    onChange={this.handleChangeMid2}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Midfielder 3</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersMid}
                    onChange={this.handleChangeMid3}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Midfielder 4</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersMid}
                    onChange={this.handleChangeMid4}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field padded="very">
                  <label>Choose Forward 1</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersFwd}
                    onChange={this.handleChangeForw1}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Forward 2</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersFwd}
                    onChange={this.handleChangeForw2}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Forward 3</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersFwd}
                    onChange={this.handleChangeForw3}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid>
          </Form>
        </Segment>
        <Segment basic>
          <Modal
            closeIcon
            size="large"
            trigger={
              <div id="button">
                <Button
                  style={this.state.styles}
                  color="purple"
                  size="huge"
                  onClick={this.onSubmit}
                >
                  Submit
                </Button>
              </div>
            }
          >
            <Modal.Header>Game Week {this.state.gameWeek} Teams</Modal.Header>
            <Modal.Content image>
              <Modal.Description>
                <Message color='purple' inverted tertiary>{
                  (this.state.noneError) ?
                    <Segment color='red' inverted tertiary>
                      <Header color="white">Form Error </Header>
                      <p>Looks like you didn't finish the form!</p>
                    </Segment> :
                    (this.state.valueError && this.state.samePlayerError) ?
                      <Segment color='red' inverted tertiary>
                        <Header color="white">Form Error </Header>
                        <p>It looks like you chose the same player for multiple positions and the total value of team exceeds 1000, please choose again</p>
                      </Segment> :

                      (this.state.samePlayerError) ?
                        <Segment color='red' inverted tertiary>
                          <Header color="white">Form Error </Header>
                          <p>It looks like you chose the same player for multiple positions, please choose again</p>
                        </Segment> :
                        (this.state.valueError) ?
                          <Segment color='red' inverted tertiary>
                            <Header color="white">Form Error </Header>
                            <p>Total value of team exceeds 1000, please choose again</p>
                          </Segment>

                          :
                          <Segment>
                            <Image size="medium" src={ModalPic} rounded centered />
                            <Grid columns={2} padded>
                              <Grid.Column>

                                <Header>Your Team </Header>
                                <p>
                                  <b>Score:</b> {this.state.score}{" "}
                                </p>
                                <p>
                                  <b>Total Value of Team: </b> {this.state.value}{" "}
                                </p>
                                <p>
                                  <b>Goal Keepers:</b> {this.state.goalkeeper1},{" "}
                                  {this.state.goalkeeper2}
                                </p>
                                <p>
                                  <b>Defenders:</b> {this.state.defender1},{" "}
                                  {this.state.defender2}, {this.state.defender3},{" "}
                                  {this.state.defender4}
                                </p>
                                <p>
                                  <b>Midfielders:</b> {this.state.midfielder1},{" "}
                                  {this.state.midfielder2}, {this.state.midfielder3},{" "}
                                  {this.state.midfielder4}
                                </p>
                                <p>
                                  <b>Forwards:</b> {this.state.forward1},{" "}
                                  {this.state.forward2}, {this.state.forward3}
                                </p>
                              </Grid.Column>
                              <Grid.Column>
                                <Header>AI Team </Header>
                                <p>
                                  <b>Score:</b>{" "}
                                </p>
                                <p>
                                  <b>Goal Keepers:</b>{" "}
                                </p>
                                <p>
                                  <b>Defenders:</b>{" "}
                                </p>
                                <p>
                                  <b>Midfielders:</b>{" "}
                                </p>
                                <p>
                                  <b>Forwards:</b>{" "}
                                </p>

                              </Grid.Column>
                            </Grid>
                          </Segment>
                }
                </Message>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Segment>
      </Container>
    );
  }
}

export default FormExampleSubcomponentControl;
