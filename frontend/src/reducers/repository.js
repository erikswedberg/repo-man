import _ from 'lodash';
import { GET_REPOS, GET_COMMITS } from '../types';

const defaultState = {
  allIds: [],
  byId: {},
  currentRepositoryId: null,
};

const RepoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_REPOS: {
      const ownerObj = _.get(action, 'payload.data.repositoryOwner');
      const repositoryNodes = _.get(action, 'payload.data.repositoryOwner.repositories.edges', []);
      const repositories = repositoryNodes.map((repositoryNode) => repositoryNode.node);
      const allIds = [...state.allIds];
      const byId = { ...state.byId };
      repositories.forEach((repository) => {
        if (allIds.indexOf(repository.id) === -1) {
          allIds.push(repository.id);
        }
        byId[repository.id] = {
          ...repository,
          ownerId: ownerObj.id,
        };
      });
      return {
        ...state,
        loading: false,
        allIds,
        byId,
        currentRepositoryId: null,
      };
    }
    case GET_COMMITS: {
      const repositoryId = _.get(action, 'payload.data.repository.id');
      const branches = _.get(action, 'payload.data.repository.refs.edges', []);
      const mainBranch = _.find(branches, (branch) => (branch.node.name === 'master' || branch.node.name === 'main'));

      if (!_.isUndefined(mainBranch)) {
        const commitNodes = _.get(mainBranch, 'node.target.history.edges', []);
        const commits = commitNodes.map((commitNode) => commitNode.node);

        const commitIds = [];
        commits.forEach((commit) => {
          if (commitIds.indexOf(commit.id) === -1) {
            commitIds.push(commit.id);
          }
        });
        const byId = { ...state.byId };
        byId[repositoryId].commits = commitIds;
        return {
          ...state,
          byId,
          loading: false,
          currentRepositoryId: repositoryId,
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

export default RepoReducer;
