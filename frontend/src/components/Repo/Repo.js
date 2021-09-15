import React from 'react';
import PropTypes from 'prop-types';

import './Repo.css';

class Repo extends React.Component {

  componentDidMount = () => {
    this.props.getRepositories();
  }

  render = () => (
    <div className="Repo">
      Repo
    </div>
  )
}

Repo.propTypes = {
  getRepositories: PropTypes.func.isRequired,
}

export default Repo;