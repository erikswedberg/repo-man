import React from 'react';
import PropTypes from 'prop-types';
import car from './RepoMan.jpg'; // Tell webpack this JS file uses this image

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
    console.log('A name was submitted: ', this.state.owner);
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
      </div>
    );
  }
}

Repo.propTypes = {
  getRepositories: PropTypes.func.isRequired,
};

export default Repo;
