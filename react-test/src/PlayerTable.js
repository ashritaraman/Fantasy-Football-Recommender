import _ from 'lodash'
import React, { Component } from 'react'
import { Form, Table, Pagination, Segment, Grid, GridColumn, Header } from 'semantic-ui-react'
import Combined from './combined_gw.json'
import DropdownGK from './DropdownGK.js'



export default class PlayerTable extends Component {
  state = {
    column: null,
    data: Combined,
    direction: 'ascending',
    begin: 0,
    end: 10,
    pageNumber: 1,
    gameWeek: 2,
    team_a_col: 'team_a_score_1',
    team_h_col: 'team_h_score_1',
  }



  handleSort = (clickedColumn) => () => {
    const { column, data, direction, begin, end } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
        begin: begin,
        end: end,
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  handlePageChange = (e, pageInfo) => {
    console.log("here");
    this.setState({
      begin: pageInfo.activePage * 10 - 10,
      end: pageInfo.activePage * 10,
    })

  }

  handleChange = (event) => {
    this.setState({ gameWeek: event.target.value });
  }


  render() {
    const { column, data, direction, begin, end, currData, gameWeek, team_a_col, team_h_col } = this.state

    return (
      <Segment basic padded='very'>
        <Form>
          <Grid columns={3} padded>
            <Grid.Column></Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label>Choose a Game Week Between 1-38</label>
                <input type="number" placeholder='2' min={1} max={38} onChange={this.handleChange} />
              </Form.Field></Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid>
        </Form>
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                Position
            </Table.HeaderCell>
              <Table.HeaderCell
              >
                Name
            </Table.HeaderCell>
              <Table.HeaderCell

              >
                Team
            </Table.HeaderCell>
              <Table.HeaderCell

              >
                Previous Week Team A Score
            </Table.HeaderCell>
              <Table.HeaderCell

              >
                Previous Week Team H Score
            </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(this.state.data.slice(this.state.begin, this.state.end), ({
              position,
              name,
              team,
              team_a_score_1,
              team_h_score_1,
              team_a_score_2,
              team_h_score_2,
              team_a_score_3,
              team_h_score_3,
              team_a_score_4,
              team_h_score_4,
              team_a_score_5,
              team_h_score_5,
              team_a_score_6,
              team_h_score_6,
              team_a_score_7,
              team_h_score_7,
              team_a_score_8,
              team_h_score_8,
              team_a_score_9,
              team_h_score_9,
              team_a_score_10,
              team_h_score_10,
              team_a_score_11,
              team_h_score_11,
              team_a_score_12,
              team_h_score_12,
              team_a_score_13,
              team_h_score_13,
              team_a_score_14,
              team_h_score_14,
              team_a_score_15,
              team_h_score_15,
              team_a_score_16,
              team_h_score_16,
              team_a_score_17,
              team_h_score_17,
              team_a_score_18,
              team_h_score_18,
              team_a_score_19,
              team_h_score_19,
              team_a_score_20,
              team_h_score_20,
              team_a_score_21,
              team_h_score_21,
              team_a_score_22,
              team_h_score_22,
              team_a_score_23,
              team_h_score_23,
              team_a_score_24,
              team_h_score_24,
              team_a_score_25,
              team_h_score_25,
              team_a_score_26,
              team_h_score_26,
              team_a_score_27,
              team_h_score_27,
              team_a_score_28,
              team_h_score_28,
              team_a_score_29,
              team_h_score_29,
              team_a_score_30,
              team_h_score_30,
              team_a_score_31,
              team_h_score_31,
              team_a_score_32,
              team_h_score_32,
              team_a_score_33,
              team_h_score_33,
              team_a_score_34,
              team_h_score_34,
              team_a_score_35,
              team_h_score_35,
              team_a_score_36,
              team_h_score_36,
              team_a_score_37,
              team_h_score_37,
              team_a_score_38,
              team_h_score_38
            }) => (
                <Table.Row key={name}>
                  <Table.Cell>{position}</Table.Cell>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{team}</Table.Cell>
                  <Table.Cell>{
                    (this.state.gameWeek == 1) ? team : (this.state.gameWeek == 2) ? team_a_score_1 : (this.state.gameWeek == 3) ? team_a_score_2 : (this.state.gameWeek == 4) ? team_a_score_3 : (this.state.gameWeek == 5) ? team_a_score_4 : (this.state.gameWeek == 6) ? team_a_score_5 :
                      (this.state.gameWeek == 7) ? team_a_score_6 : (this.state.gameWeek == 8) ? team_a_score_7 : (this.state.gameWeek == 9) ? team_a_score_8 : (this.state.gameWeek == 10) ? team_a_score_9 : (this.state.gameWeek == 11) ? team_a_score_10 : (this.state.gameWeek == 12) ? team_a_score_11 : (this.state.gameWeek == 13) ? team_a_score_12 : (this.state.gameWeek == 14) ? team_a_score_13 : (this.state.gameWeek == 15) ? team_a_score_14 : (this.state.gameWeek == 16) ? team_a_score_15 : (this.state.gameWeek == 17) ? team_a_score_16 : (this.state.gameWeek == 18) ? team_a_score_17 : (this.state.gameWeek == 19) ? team_a_score_18 : (this.state.gameWeek == 20) ? team_a_score_19 : (this.state.gameWeek == 21) ? team_a_score_20 :
                        (this.state.gameWeek == 22) ? team_a_score_21 : (this.state.gameWeek == 23) ? team_a_score_22 : (this.state.gameWeek == 24) ? team_a_score_23 : (this.state.gameWeek == 25) ? team_a_score_24 : (this.state.gameWeek == 26) ? team_a_score_25 : (this.state.gameWeek == 27) ? team_a_score_26 : (this.state.gameWeek == 28) ? team_a_score_27 : (this.state.gameWeek == 29) ? team_a_score_28 : (this.state.gameWeek == 30) ? team_a_score_29 : (this.state.gameWeek == 31) ? team_a_score_30 : (this.state.gameWeek == 32) ? team_a_score_31 : (this.state.gameWeek == 33) ? team_a_score_32 : (this.state.gameWeek == 34) ? team_a_score_33 : (this.state.gameWeek == 35) ? team_a_score_34 : (this.state.gameWeek == 36) ? team_a_score_35 : (this.state.gameWeek == 37) ? team_a_score_36 : (this.state.gameWeek == 38) ? team_a_score_37 : team_a_score_38

                  }</Table.Cell>
                  <Table.Cell>{
                    (this.state.gameWeek == 1) ? team : (this.state.gameWeek == 2) ? team_h_score_1 : (this.state.gameWeek == 3) ? team_h_score_2 : (this.state.gameWeek == 4) ? team_h_score_3 : (this.state.gameWeek == 5) ? team_h_score_4 : (this.state.gameWeek == 6) ? team_h_score_5 : (this.state.gameWeek == 7) ? team_h_score_6 : (this.state.gameWeek == 8) ? team_h_score_7 : (this.state.gameWeek == 9) ? team_h_score_8 : (this.state.gameWeek == 10) ? team_h_score_9 : (this.state.gameWeek == 11) ? team_h_score_10 : (this.state.gameWeek == 12) ? team_h_score_11 : (this.state.gameWeek == 13) ? team_h_score_12 : (this.state.gameWeek == 14) ? team_h_score_13 : (this.state.gameWeek == 15) ? team_h_score_14 : (this.state.gameWeek == 16) ? team_h_score_15 : (this.state.gameWeek == 17) ? team_h_score_16 : (this.state.gameWeek == 18) ? team_h_score_17 : (this.state.gameWeek == 19) ? team_h_score_18 : (this.state.gameWeek == 20) ? team_h_score_19 : (this.state.gameWeek == 21) ? team_h_score_20 :
                      (this.state.gameWeek == 22) ? team_h_score_21 : (this.state.gameWeek == 23) ? team_h_score_22 : (this.state.gameWeek == 24) ? team_h_score_23 : (this.state.gameWeek == 25) ? team_h_score_24 : (this.state.gameWeek == 26) ? team_h_score_25 : (this.state.gameWeek == 27) ? team_h_score_26 : (this.state.gameWeek == 28) ? team_h_score_27 : (this.state.gameWeek == 29) ? team_h_score_28 : (this.state.gameWeek == 30) ? team_h_score_29 : (this.state.gameWeek == 31) ? team_h_score_30 : (this.state.gameWeek == 32) ? team_h_score_31 : (this.state.gameWeek == 33) ? team_h_score_32 : (this.state.gameWeek == 34) ? team_h_score_33 : (this.state.gameWeek == 35) ? team_h_score_34 : (this.state.gameWeek == 36) ? team_h_score_35 : (this.state.gameWeek == 37) ? team_h_score_36 : (this.state.gameWeek == 38) ? team_h_score_37 : team_h_score_38

                  }</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
          <Table.Footer>
            <Pagination defaultActivePage={1} totalPages={Math.ceil(data.length / 10)} onPageChange={this.handlePageChange} />
          </Table.Footer>
        </Table>
      </Segment >
    )
  }
}

