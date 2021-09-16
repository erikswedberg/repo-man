import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';

import './CommitList.css';

class CommitList extends React.Component {
  render() {
    const repositories = _.get(this.props.owner, 'repositories', []);
    const currentRepository = _.find(repositories, { id: this.props.currentRepositoryId });
    const commits = _.get(currentRepository, 'commits', []);
    return (
      <ul className="CommitList">
        {commits.map((commit) => (
          <li key={commit.id}>
            <div className="commitInfoCont">
              <div className="commitInfoContCont">
                <div className="commitInfo">
                  <span className="commitOid">
                    {commit.abbreviatedOid}
                  </span>
                  <span className="commitDate">
                    {moment(commit.committedDate).format('M/D/YYYY h:mm a')}
                  </span>
                  <span className="commitMessage">
                    {commit.message}
                  </span>
                </div>
              </div>
              <div className="commitLinkContCont">
                <div className="commitLinkCont">
                  <a className="commitLink" target="_blank" href={commit.commitUrl} rel="noopener noreferrer">{commit.commitUrl}</a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

CommitList.propTypes = {
  owner: PropTypes.object,
  currentRepositoryId: PropTypes.string,
};

CommitList.defaultProps = {
  owner: {},
  currentRepositoryId: null,
};

export default CommitList;
