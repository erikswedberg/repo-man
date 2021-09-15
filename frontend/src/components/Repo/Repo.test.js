import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo';
// import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';
//
// test('renders learn react link', () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
//
//   expect(getByText(/learn/i)).toBeInTheDocument();
// });



describe('Repo', () => {
  it('should render a <div />', () => {
    const wrapper = shallow(<Repo getRepositories={() => {}}/>);
    expect(wrapper.find('div').length).toEqual(1);
  });
});