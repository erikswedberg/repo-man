import _ from 'lodash';
import { denormalize } from 'normalizr';
import * as schema from './schema';

export default (state, newOwnerId = null) => {
  let ownerId = _.get(state, 'owner.allIds[0]');
  if (newOwnerId !== null) {
    ownerId = newOwnerId;
  }
  const owner = _.get(state, `owner.byId[${ownerId}]`);
  const isLoading = _.get(state, 'owner.isLoading');

  if (!ownerId || isLoading) { return {}; }
  const entities = {
    owner: _.get(state, 'owner.byId'),
    repository: _.get(state, 'repository.byId'),
    commit: _.get(state, 'commit.byId'),
  };
  const rehydratedOwner = denormalize(owner, schema.owner, entities);
  return rehydratedOwner;
};
