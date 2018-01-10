import { Login } from './Login';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe ('Login', () => {
  it('should match the snapshot', () => {
    const renderedLogin = shallow(<Login />);

    expect(renderedLogin).toMatchSnapshot();
  });

  it('should call handleSignUp when the button is clicked', () => {
    const mockFunc = jest.fn()
    
    const renderedLogin = shallow(<Login handleLogin = {mockFunc}/>);

    const button = renderedLogin.find('button');

    expect(mockFunc.mock.calls.length).toEqual(0);

    button.simulate('click');

    expect(mockFunc.mock.calls.length).toEqual(1);
  });
});