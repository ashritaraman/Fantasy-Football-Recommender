import React, { Fragment } from 'react';
import './App.css';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import Head from './Head';
import FormExampleSubcomponentControl from './FormExampleSubcomponentControl';
import Menu from './Menu';
import ProjectDescription from './ProjectDescription'
import PlayerTable from './PlayerTable'

function App() {
  return (
    <Fragment>
      <Menu />
      {/* <Grid columns={1} padded> */}
      <Head />
      <ProjectDescription />
      <PlayerTable />
      <FormExampleSubcomponentControl />
      {/* </Grid> */}
    </Fragment>
  );
}

export default App;
