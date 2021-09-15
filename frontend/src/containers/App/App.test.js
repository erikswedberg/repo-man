import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import RepoContainer from '../RepoContainer/RepoContainer'

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



describe('App', () => {
  
  beforeEach(() => jest.resetModules());

  it('should render a <div />', () => {
    jest.mock("react", () => ({
          ...jest.requireActual("React"),
          useEffect: (f) => f(),
        }));
  
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the RepoContainer Component', () => {
    const wrapper = shallow(<App />);
      expect(wrapper.containsMatchingElement(<RepoContainer />)).toEqual(true);
  });
});