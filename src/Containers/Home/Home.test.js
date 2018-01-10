import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { Home } from './Home';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
  it('should match the snapshot', ()=> {

    const renderedHome = shallow(<Home />);

    expect(renderedHome).toMatchSnapshot();
  });
});