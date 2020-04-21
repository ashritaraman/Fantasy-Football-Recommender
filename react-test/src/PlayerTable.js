import _ from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import PlayerBio from './players_bio.json'



export default class PlayerTable extends Component {
  state = {
    column: null,
    data: PlayerBio,
    direction: null,
  }

  handleSort = (clickedColumn) => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { column, data, direction } = this.state

    return (
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
          {_.map(data, ({ Position, name, team }) => (
            <Table.Row key={name}>
              <Table.Cell>{Position}</Table.Cell>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{team}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}