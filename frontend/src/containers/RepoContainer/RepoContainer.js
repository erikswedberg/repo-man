import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Repo from '../../components/Repo/Repo';
import { selectOwner } from '../../selectors';

import './RepoContainer.css';
import {
  getRepositories,
  getCommits,
} from '../../actions/repo';

class RepoContainer extends Component {
  render() {
    return (
      <div className="RepoContainer">
        <Repo
          getRepositories={this.props.getRepositories}
          getCommits={this.props.getCommits}
          owner={this.props.owner}
          currentRepositoryId={this.props.currentRepositoryId}
        />
      </div>
    );
  }
}

RepoContainer.propTypes = {
  owner: PropTypes.object,
  getRepositories: PropTypes.func.isRequired,
  getCommits: PropTypes.func.isRequired,
  currentRepositoryId: PropTypes.string,
};

RepoContainer.defaultProps = {
  owner: {},
  currentRepositoryId: null,
};

const mapStateToProps = (state) => {
  const currentOwnerId = _.get(state, 'owner.currentOwnerId', null);
  const currentRepositoryId = _.get(state, 'repository.currentRepositoryId', null);
  const owner = selectOwner(state, currentOwnerId);
  return {
    owner,
    currentOwnerId,
    currentRepositoryId,
  };
};

export default connect(mapStateToProps, {
  getRepositories,
  getCommits,
})(RepoContainer);
