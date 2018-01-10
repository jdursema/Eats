import { SignUp } from './SignUp';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('SignUp', () => {
  it('should match the snapshot', () => {
    const renderedSignUp = shallow(<SignUp />);

    expect(renderedSignUp).toMatchSnapshot();
  });

  it('should call handleSignUp when the button is clicked', () => {
    const event = {preventDefault: jest.fn()};
    const mockFunc = jest.fn();
    
    
    const renderedSignUp = shallow(<SignUp handleSignUp = {mockFunc}/>);

    const button = renderedSignUp.find('button');

    expect(mockFunc.mock.calls.length).toEqual(0);

    button.simulate('click', event);

    expect(mockFunc.mock.calls.length).toEqual(1);
  });
});
