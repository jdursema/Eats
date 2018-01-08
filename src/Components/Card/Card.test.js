import Card from './Card';
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('card', () => {
  it('should match its snapshot', () => {

    const mockFunc = jest.fn()

    const cardObj = {name: 'Scales', data:{
      hours: '9-5',
      reservations: 'no'}
    }

    const card = shallow(<Card
      info= {cardObj}
      handleAddFav = {mockFunc}
      handleDeleteFav = {mockFunc}
      user = {{name: 'Julie'}}
      history = {'hi'}
      favorited = {false}
      favorites={[{name: 'Duck Fat'}]}
     />)

     expect(card).toMatchSnapshot()
  })

  it('should call handleAddFav on click if there is a user and the card is not in favorites', () => {
    const mockFunc = jest.fn()
    const mockFunc2 = jest.fn()

    const cardObj = {name: 'Scales', data:{
      hours: '9-5',
      reservations: 'no'}
    }

    const card = shallow(<Card
      info= {cardObj}
      handleAddFav = {mockFunc}
      handleDeleteFav = {mockFunc2}
      user = {{name: 'Julie', uid: '3jriero384u2'}}
      history = {[]}
      favorited = {false}
      favorites={[{name: 'Duck Fat'}]}
     />)

     expect(mockFunc.mock.calls.length).toEqual(0)

    card.find('button').simulate('click')

    expect(mockFunc.mock.calls.length).toEqual(1)

  })

  it('should call handleDeleteFav on click if there is auser and the card is in favorites', () => {
    const mockFunc = jest.fn()
    const mockFunc2 = jest.fn()

    const cardObj = {name: 'Scales', data:{
      hours: '9-5',
      reservations: 'no'}
    }

    const card = shallow(<Card
      info= {cardObj}
      handleAddFav = {mockFunc}
      handleDeleteFav = {mockFunc2}
      user = {{name: 'Julie', uid: '3jriero384u2'}}
      history = {[]}
      favorited = {true}
      favorites={[cardObj]}
     />)

     expect(mockFunc2.mock.calls.length).toEqual(0)

    card.find('button').simulate('click')

    expect(mockFunc2.mock.calls.length).toEqual(1)

  })


  it('shouldnt call handleAddFav or handleDeleteFav on click if there is no user', () => {
    const mockFunc = jest.fn()
    const mockFunc2 = jest.fn()

    const cardObj = {name: 'Scales', data:{
      hours: '9-5',
      reservations: 'no'}
    }

    const card = shallow(<Card
      info= {cardObj}
      handleAddFav = {mockFunc}
      handleDeleteFav = {mockFunc}
      user = {{}}
      history = {[]}
      favorited = {false}
      favorites={[{name: 'Duck Fat'}]}
     />)

     expect(mockFunc.mock.calls.length).toEqual(0)

     expect(mockFunc2.mock.calls.length).toEqual(0)

    card.find('button').simulate('click')

    expect(mockFunc.mock.calls.length).toEqual(0)

    expect(mockFunc2.mock.calls.length).toEqual(0)

  })




})