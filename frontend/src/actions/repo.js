import {GET_REPOS, REPOS_ERROR} from '../types'
import axios from 'axios'

export const getRepositories = () => async dispatch => {

    const query = JSON.stringify(
      {query: `{
        repositoryOwner(login: "netflix") {
          repositories(first: 20,  orderBy: {field: STARGAZERS, direction: DESC}) {
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
      }`}
    );

    try{
        const res = await axios.post(`https://api.github.com/graphql`,
          query,
          {headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_GH_TOKEN}`,
          }}
        )
        dispatch( {
            type: GET_REPOS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: REPOS_ERROR,
            payload: console.log(e),
        })
    }

}
