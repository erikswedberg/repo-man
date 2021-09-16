import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import car from './RepoMan.jpg'; // Tell webpack this JS file uses this image
import RepoList from '../RepoList/RepoList';
import CommitList from '../CommitList/CommitList';

import './Repo.css';

class Repo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { owner: 'netflix', lastOwner: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { owner } = this.state;
    this.getRepositories(owner);
  }

  handleChange(event) {
    this.setState({ owner: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { lastOwner, owner } = this.state;
    if (lastOwner !== owner) {
      this.getRepositories(owner);
    }
  }

  getRepositories(owner) {
    this.setState({ lastOwner: owner }, () => {
      this.props.getRepositories(owner);
    });
  }

  render() {
    const repositories = _.get(this.props.owner, 'repositories', []);
    const repository = _.find(repositories, { id: this.props.currentRepositoryId });
    const repositoryName = _.get(repository, 'name');
    return (
      <div className="Repo">
        <img src={car} alt="Repo Man Car" width="275" />
        <h1>Repo Man</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="formLabel" htmlFor="owner">
            Enter a github account to list repositories:
            <br />
            <input className="ownerInput" id="owner" type="text" value={this.state.owner} onChange={this.handleChange} />
          </label>
          <input className="formSubmit" type="submit" value="Submit" />
        </form>
        <div className="cont">
          <div>
            <h5>Repositories</h5>
            <RepoList owner={this.props.owner} getCommits={this.props.getCommits} />
          </div>
          <div>
            { this.props.currentRepositoryId
              ? (
                <>
                  <h5 className="commitHeader">
                    { `${repositoryName} ` }
                    Commits
                  </h5>
                  <CommitList
                    owner={this.props.owner}
                    currentRepositoryId={this.props.currentRepositoryId}
                  />
                </>
              )
              : null }
          </div>
        </div>
      </div>
    );
  }
}

Repo.propTypes = {
  owner: PropTypes.object,
  getRepositories: PropTypes.func.isRequired,
  getCommits: PropTypes.func.isRequired,
  currentRepositoryId: PropTypes.string,
};

Repo.defaultProps = {
  owner: {},
  currentRepositoryId: null,
};

export default Repo;
