import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './RepoList.css';

class RepoList extends React.Component {
  handleClick(e, repositoryName) {
    this.props.getCommits(this.props.owner.login, repositoryName);
  }

  render() {
    const repositories = _.get(this.props, 'owner.repositories', []);
    return (
      <ul className="RepoList">
        {repositories.map((repository) => (
          <li key={repository.id} onClick={(e) => this.handleClick(e, repository.name)}>
            <span className="name">
              {repository.name}
              <a className="link" target="_blank" href={repository.url} rel="noopener noreferrer">{repository.url}</a>
            </span>
            <div className="counts">
              <span className="stars">
                Stars:
                {repository.stargazers.totalCount}
              </span>
              <span className="forks">
                Forks:
                {repository.forks.totalCount}
              </span>
              <span className="watchers">
                Watchers:
                {repository.watchers.totalCount}
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

RepoList.propTypes = {
  owner: PropTypes.object,
  getCommits: PropTypes.func.isRequired,
};

RepoList.defaultProps = {
  owner: {},
};

export default RepoList;
