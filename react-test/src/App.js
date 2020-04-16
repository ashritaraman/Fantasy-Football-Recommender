import React, { Fragment } from 'react';
import './App.css';
import ProjectDescription from './ProjectDescription.js'
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

function App() {
  return (
    <Fragment>
      <Menu />
      <Head />
      <ProjectDescription />
      <FormExampleSubcomponentControl />
    </Fragment>
  );
}

export default App;
