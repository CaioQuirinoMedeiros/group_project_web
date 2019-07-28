/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import TeamsActions from '../../store/ducks/teams';
import AuthActions from '../../store/ducks/auth';

import Modal from '../Modal';
import Button from '../../styles/components/button';

import {
  Container, TeamList, Team, NewTeam, Logout,
} from './styles';

class TeamSwitcher extends Component {
  static propTypes = {
    getTeamsRequest: PropTypes.func.isRequired,
    teams: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        }),
      ),
      teamModalOpen: PropTypes.bool,
    }).isRequired,
    selectTeam: PropTypes.func.isRequired,
    openTeamModal: PropTypes.func.isRequired,
    closeTeamModal: PropTypes.func.isRequired,
    createTeamRequest: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
  };

  state = {
    newTeam: '',
  };

  componentDidMount() {
    const { getTeamsRequest } = this.props;

    getTeamsRequest();
  }

  handleTeamSelect = (team) => {
    const { selectTeam } = this.props;

    selectTeam(team);
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreateTeam = (e) => {
    e.preventDefault();

    const { createTeamRequest } = this.props;
    const { newTeam } = this.state;

    createTeamRequest(newTeam);
  };

  render() {
    const {
      teams, openTeamModal, closeTeamModal, signOut,
    } = this.props;
    const { newTeam } = this.state;

    return (
      <Container>
        <TeamList>
          {teams.data.map(team => (
            <Team key={team.id} onClick={() => this.handleTeamSelect(team)}>
              <img
                src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${
                  team.name
                }`}
                alt={team.name}
              />
            </Team>
          ))}
          <Team />
          <NewTeam onClick={openTeamModal}>NOVO</NewTeam>

          {teams.teamModalOpen && (
            <Modal>
              <h1>Criar time</h1>
              <form onSubmit={this.handleCreateTeam}>
                <span>NOME</span>
                <input name="newTeam" value={newTeam} onChange={this.handleInputChange} />
                <Button size="big" type="submit">
                  Salvar
                </Button>
                <Button size="small" color="gray" onClick={closeTeamModal}>
                  Cancelar
                </Button>
              </form>
            </Modal>
          )}
        </TeamList>

        <Logout onClick={signOut}>SAIR</Logout>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.teams,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...TeamsActions, ...AuthActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamSwitcher);
