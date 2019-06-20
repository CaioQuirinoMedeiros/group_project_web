import React, { Component } from 'react';

// import api from '../../services/api';

import TeamSwitcher from '../../components/TeamSwitcher';
import Projects from '../../components/Projects';

import { Container } from './styles';

class Main extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <TeamSwitcher />
        <Projects />
      </Container>
    );
  }
}

export default Main;
