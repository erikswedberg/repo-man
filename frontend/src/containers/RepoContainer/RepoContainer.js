import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Repo from '../../components/Repo/Repo';

import './RepoContainer.css';
import {
  getRepositories,
} from '../../actions/repo';

class RepoContainer extends Component {
  render() {
    return (
      <div className="RepoContainer">
        <Repo
          getRepositories={this.props.getRepositories}
        />
      </div>
    );
  }
}

RepoContainer.propTypes = {
  getRepositories: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, {
  getRepositories,
})(RepoContainer);
