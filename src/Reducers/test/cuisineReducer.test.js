/*eslint-disable camelcase*/
import cuisineReducer from '../cuisine-reducer';
import * as actions from '../../Actions/index';

describe('cuisineReducer', () => {
  it('should return the default state', () => {
    const expected = [];

    expect(cuisineReducer(undefined, {})).toEqual(expected);
  });

  it('should return a new array with the array of cuisines', () => {
    const cuisinesArray = [
      {cuisine_name: 'Chinese',
        cuisine_id: 25},
      {cuisine_name: 'American',
        cuisine_id: 1}];

    const expected = cuisinesArray;
    
    const action = 
      actions.addCusineIdsToStore(cuisinesArray);

    expect(cuisineReducer(undefined, action)).toEqual(expected);
  });

  it('should replace the prior state when a new cuisine array is added', () => {
    const state = [
      {cuisine_name: 'Italian',
        cuisine_id: 45},
      {cuisine_name: 'Thai',
        cuisine_id: 77}];

    const cuisineArray = [
      {cuisine_name: 'Chinese',
        cuisine_id: 25},
      {cuisine_name: 'American',
        cuisine_id: 1}];

    const expected = cuisineArray;

    const action = actions.addCusineIdsToStore(cuisineArray);

    expect(cuisineReducer(state, action)).toEqual(expected);
  });

});