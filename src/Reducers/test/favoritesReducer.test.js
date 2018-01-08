import * as actions from '../../Actions/index';
import favoriteReducer from '../favorites-reducer';

describe('favoriteReducer', () => {
  it('should return the default state', () => {
    const expected = [];

    expect(favoriteReducer(undefined, {})).toEqual(expected);
  });

  it('should return a new state with the favorite restaurant data added', () => {
    const cardData= {name: 'Duck Fat'};
    const state = [
      {name: 'Scales'}, 
      {name: 'Grace'}];

    const expected = [
      {name: 'Scales'}, 
      {name: 'Grace'},
      {name: 'Duck Fat'}];

    const action = actions.addFavoriteToState(cardData);

    expect(favoriteReducer(state, action)).toEqual(expected);
  });

  it('should replace state with the logged in users fetched favorites', () => {
    const restarantArray = [
      {name: 'Duck Fat'},
      {name: 'Scales'}, 
      {name: 'Grace'}];
    

    const expected = [...restarantArray];

    const action = actions.addUserFavorites(restarantArray);

    expect(favoriteReducer([], action)).toEqual(expected);
  });

  it('should delete a favorite from state', () => {
    const state = [
      {name: 'Duck Fat'},
      {name: 'Scales'}, 
      {name: 'Grace'}];
    const restaurant = {name: 'Duck Fat'}

    const expected = [
      {name: 'Scales'}, 
      {name: 'Grace'}];

    const action =  
      actions.removeFavoriteFromStore(restaurant);
    
    expect(favoriteReducer(state, action)).toEqual(expected);

  });

});