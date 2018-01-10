import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('NavBar', () => {
  it('should match the snapshot', ()=> {
    const mockFunc = jest.fn();

    const renderedNavBar = shallow(<NavBar 
      handleLocation= { mockFunc }
      user={{}}
      location={{}}/>);

    expect(renderedNavBar).toMatchSnapshot();
  });

  it('should call handle location when the NavBar is mounted', () => {
    const mockFunc = jest.fn();

    shallow(<NavBar 
      handleLocation= { mockFunc }
      user={{}}
      location={{}}/>);

    expect(mockFunc.mock.calls.length).toEqual(1);

  })
});