# Github Repository Browser


this is a demo using Github's GraphQL API.

it allows you to type in any github account/organization and it fetches the top 20 repos sorted by the most stargazers.

clicking on a repo's list item will make a subsequent call to get that repo's latest 20 commits in the Main branch.

This uses normalizr and a `byId: {}, allIds: []` scheme to flatten the Redux store, but pass nested objects to the React components for rendering

### To Run
`source env.sh && cd frontend && yarn start`

This project was bootstrapped with create-react-app

You should have an .envrc.example file in /config that contains your personal github token

### To Test
`cd frontend && yarn test`

This will run jest/enzyme tests on the React components

### To Run Lint
`cd frontend && yarn lint`

This will run eslint / airbnb on the JavaScript


### To Do
* Pagination of Results
* Better Testing