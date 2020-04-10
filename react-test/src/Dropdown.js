import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const players = [{ key: 'Petr', value: 'Cech', text: 'Petr Cech' },
{ key: 'Bernd', value: 'Leno', text: 'Bernd Leno' },
{ key: 'Laurent', value: 'Koscielny', text: 'Laurent Koscielny' },]

const DropdownExampleMultipleSearchSelection = () => (
  <Dropdown
    placeholder='Player'
    label='Player'
    fluid
    multiple
    search
    selection
    options={players}
  />
)

export default DropdownExampleMultipleSearchSelection