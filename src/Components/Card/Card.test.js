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
})