import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders withoud crashing', () => {
  shallow(<App />);
});
