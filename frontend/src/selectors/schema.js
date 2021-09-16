import { schema } from 'normalizr';

export const commit = new schema.Entity('commit');
export const commits = new schema.Array(commit);

export const repository = new schema.Entity('repository', { commits });
export const repositories = new schema.Array(repository);

export const owner = new schema.Entity('owner', { repositories });
