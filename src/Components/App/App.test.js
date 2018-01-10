import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('should match the snapshot', ()=> {
    const renderedApp = shallow(<App/>)

    expect(renderedApp).toMatchSnapshot()
  });
});