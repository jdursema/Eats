import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('CardContainer', () => {
  it('should match the snapshot', ()=> {
    const mockFunc = jest.fn();
    const mockFunc2 = jest.fn();
    const cardArray = [
      {name: 'Scales', data: {
        location: 'Portland, ME'
      }},
      {name: 'Grace', data: {
        location: 'Portland, ME'
      }},
      {name: 'Miyakame', data: {
        location: 'Portland, ME'
      }}
    ]

    const renderedCardContainer = shallow(<CardContainer
      cards= {cardArray}
      handleAddFav = {mockFunc}
      handleDeleteFav = {mockFunc2}
      user = {{name: 'Julie', uid: '3jriero384u2'}}
      history = {[]}
      favorites={[{name: 'Duck Fat'}]}
    />);

    expect(renderedCardContainer).toMatchSnapshot();
  });
});