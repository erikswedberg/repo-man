import _ from 'lodash';
import { GET_REPOS } from '../types';

const defaultState = {
  allIds: [],
  byId: {},
  currentOwnerId: null,
};

const OwnerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_REPOS: {
      const ownerObj = _.get(action, 'payload.data.repositoryOwner');

      const repositoryNodes = _.get(action, 'payload.data.repositoryOwner.repositories.edges', []);
      const repositories = repositoryNodes.map((repositoryNode) => repositoryNode.node);
      const repositoryIds = [];
      repositories.forEach((repository) => {
        if (repositoryIds.indexOf(repository.id) === -1) {
          repositoryIds.push(repository.id);
        }
      });
      const owner = {
        id: ownerObj.id,
        login: ownerObj.login,
        repositories: repositoryIds,
      };
      const ownerById = {};
      ownerById[ownerObj.id] = owner;
      const allIds = [...state.allIds];
      if (allIds.indexOf(owner.id) === -1) {
        allIds.push(owner.id);
      }
      return {
        ...state,
        byId: { ...state.byId, ...ownerById },
        allIds,
        loading: false,
        currentOwnerId: ownerObj.id,
      };
    }
    default: {
      return state;
    }
  }
};

export default OwnerReducer;
