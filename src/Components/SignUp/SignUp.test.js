import SignUp from './SignUp';
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk]

Enzyme.configure({ adapter: new Adapter() })
const fakeStore = configureMockStore(middlewares)(
  {}
);

const setup = () => {

  const props = {
    handleSignUp: jest.fn()
  };

  const wrapper = mount(
    <Provider store={fakeStore}>
      <SignUp/>
    </Provider>
  )

  return {
    props,
    wrapper
  }
}

describe('SignUp', () => {
  it.skip('should match its snapshot', () => {
    const renderedSignUp = mount(
      <Provider store={fakeStore}>
        < SignUp/>
      </Provider>);
    
    expect(renderedSignUp).toMatchSnapshot();
  });

  it('should be defined', () => {
    const renderedSignUp = mount(
      <Provider store={fakeStore}>
        < SignUp/>
      </Provider>);

    expect(renderedSignUp).toBeDefined()

  });

  it.skip('button click should call handleSignUp function', () => {
    const { props, wrapper } = setup()

    const button = wrapper.find('button');

    button.simulate('click');

    expect(props.handleSignUp).toBeCalled


  })

})