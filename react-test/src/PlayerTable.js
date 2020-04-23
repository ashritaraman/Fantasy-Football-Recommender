import _ from 'lodash'
import React, { Component } from 'react'
import { Table, Pagination, Segment } from 'semantic-ui-react'
import PlayerBio from './players_bio.json'



export default class PlayerTable extends Component {
  state = {
    column: null,
    data: PlayerBio,
    direction: 'ascending',
    begin: 0,
    end: 10,
    pageNumber: 1


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


  render() {
    const { column, data, direction, begin, end, currData } = this.state

    return (
      <Segment basic padded='very'>
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'Position' ? direction : null}
                onClick={this.handleSort('Position')}
              >
                Position
            </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'name' ? direction : null}
                onClick={this.handleSort('name')}
              >
                Name
            </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'team' ? direction : null}
                onClick={this.handleSort('team')}
              >
                Team
            </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(this.state.data.slice(this.state.begin, this.state.end), ({ Position, name, team }) => (
              <Table.Row key={name}>
                <Table.Cell>{Position}</Table.Cell>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{team}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
          <Table.Footer>
            <Pagination defaultActivePage={1} totalPages={Math.ceil(data.length / 10)} onPageChange={this.handlePageChange} />
          </Table.Footer>
        </Table>
      </Segment>
    )
  }
}

