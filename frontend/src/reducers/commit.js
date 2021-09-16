import _ from 'lodash';
import { GET_COMMITS } from '../types';

const defaultState = {
  allIds: [],
  byId: {},
};

const CommitReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_COMMITS: {
      const repositoryId = _.get(action, 'payload.data.repository.id');
      const branches = _.get(action, 'payload.data.repository.refs.edges', []);
      const mainBranch = _.find(branches, (branch) => (branch.node.name === 'master' || branch.node.name === 'main'));

      if (!_.isUndefined(mainBranch)) {
        const commitNodes = _.get(mainBranch, 'node.target.history.edges', []);
        const commits = commitNodes.map((commitNode) => commitNode.node);

        const allIds = [...state.allIds];
        const byId = { ...state.byId };

        commits.forEach((commit) => {
          if (allIds.indexOf(commit.id) === -1) {
            allIds.push(commit.id);
          }
          byId[commit.id] = {
            ...commit,
            repositoryId,
          };
        });
        return {
          ...state,
          byId,
          allIds,
          loading: false,
        };
      }
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default CommitReducer;
