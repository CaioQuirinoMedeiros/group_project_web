/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectsActions from '../../store/ducks/projects';
import MembersActions from '../../store/ducks/members';

import Can from '../Can';
import Modal from '../Modal';
import Button from '../../styles/components/button';
import Members from '../Members';

import { Container, Project } from './styles';

class Projects extends Component {
  static propTypes = {
    activeTeam: PropTypes.shape({
      name: PropTypes.string,
    }),
    getProjectsRequest: PropTypes.func.isRequired,
    createProjectRequest: PropTypes.func.isRequired,
    openProjectModal: PropTypes.func.isRequired,
    closeProjectModal: PropTypes.func.isRequired,
    deleteProjectRequest: PropTypes.func.isRequired,
    openMemberModal: PropTypes.func.isRequired,
    projects: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
      projectModalOpen: PropTypes.bool,
    }).isRequired,
    members: PropTypes.shape({
      memberModalOpen: PropTypes.bool,
    }).isRequired,
  };

  static defaultProps = {
    activeTeam: null,
  };

  state = {
    newProject: '',
  };

  componentDidMount() {
    const { getProjectsRequest, activeTeam } = this.props;

    if (activeTeam) {
      getProjectsRequest();
    }
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreateProject = (e) => {
    e.preventDefault();

    const { createProjectRequest } = this.props;
    const { newProject } = this.state;

    createProjectRequest(newProject);
  };

  render() {
    const {
      activeTeam,
      projects,
      openProjectModal,
      closeProjectModal,
      openMemberModal,
      deleteProjectRequest,
      members,
    } = this.props;
    const { newProject } = this.state;

    return activeTeam ? (
      <Container>
        <header>
          <h1>{activeTeam.name}</h1>
          <div>
            <Can checkPermission="projects_create">
              <Button onClick={openProjectModal}>+ Novo</Button>
            </Can>
            <Button onClick={openMemberModal}>Membros</Button>
          </div>
        </header>

        {projects.data.map(project => (
          <Project key={project.id}>
            <p>{project.title}</p>
            <Can checkPermission="projects_create">
              <Button color="danger" onClick={() => deleteProjectRequest(project.id)}>
                delete
              </Button>
            </Can>
          </Project>
        ))}

        {projects.projectModalOpen && (
          <Modal>
            <h1>Criar projeto</h1>
            <form onSubmit={this.handleCreateProject}>
              <span>NOME</span>
              <input name="newProject" value={newProject} onChange={this.handleInputChange} />

              <Button size="big" type="submit">
                Salvar
              </Button>
              <Button size="small" color="gray" onClick={closeProjectModal}>
                Cancelar
              </Button>
            </form>
          </Modal>
        )}

        {members.memberModalOpen && <Members />}
      </Container>
    ) : null;
  }
}

const mapStateToProps = state => ({
  activeTeam: state.teams.active,
  projects: state.projects,
  members: state.members,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProjectsActions, ...MembersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);
