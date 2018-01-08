import cuisineReducer from '../cuisine-reducer';
import * as actions from '../../Actions/index';

describe('cuisineReducer', () => {
  it('should return the default state', () => {
    const expected = [];

    expect(cuisineReducer(undefined, {})).toEqual(expected);
  });

  it('should return a new array with the array of cuisines', () => {
    const cuisineArray = [
      {cuisine_name: 'Chinese',
        cuisine_id: 25},
      {cuisine_name: 'American',
        cuisine_id: 1}];
        
    const expected = cuisineArray;
    
    const action = 
      actions.addCusineIdsToStore(cuisineArray)

    expect(cuisineReducer([], action)).toEqual(expected)
  });

});