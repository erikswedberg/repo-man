import axios from 'axios';
import {
  GET_REPOS, REPOS_ERROR, GET_COMMITS, COMMITS_ERROR,
} from '../types';

export const getRepositories = (owner = 'netflix') => async (dispatch) => {
  const query = JSON.stringify(
    {
      query:
      `{ repositoryOwner(login: "${owner}") {
        id,
        login,
        repositories(first: 20,
          ownerAffiliations: OWNER,
          orderBy: {field: STARGAZERS, direction: DESC}) {
          edges {
            node {
              id,
              name,
              url,
              stargazers {
                totalCount
              }
              forks {
                totalCount
              }
              watchers {
                totalCount
              }
            }
          }
        }
      }
    }`,
    },
  );

  try {
    const res = await axios.post('https://api.github.com/graphql',
      query,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_GH_TOKEN}`,
        },
      });
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: REPOS_ERROR,
      payload: console.error(e), // eslint-disable-line
    });
  }
};

export const getCommits = (owner = 'netflix', repo = 'Hyrix') => async (dispatch) => {
  const query = JSON.stringify(
    {
      query:
      `{
        repository(owner: "${owner}", name: "${repo}") {
          id,
          refs(refPrefix: "refs/heads/", orderBy: {direction: DESC, field: TAG_COMMIT_DATE}, last: 100) {
            edges {
              node {
                ... on Ref {
                  name
                  target {
                    ... on Commit {
                      history(first: 20) {
                        edges {
                          node {
                            ... on Commit {
                              id,
                              committedDate,
                              commitUrl,
                              abbreviatedOid,
                              messageBody
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }`,
    },
  );

  try {
    const res = await axios.post('https://api.github.com/graphql',
      query,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_GH_TOKEN}`,
        },
      });
    dispatch({
      type: GET_COMMITS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: COMMITS_ERROR,
      payload: console.error(e), // eslint-disable-line
    });
  }
};
