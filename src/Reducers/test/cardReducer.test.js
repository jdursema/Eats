import * as actions from '../../Actions/index';
import cardReducer from '../card-reducer';

describe('cardReducer', () => {
  it('should return the default state', () => {
    const expected = [];

    expect(cardReducer(undefined, {})).toEqual(expected);
  });
  it('should return a new state with the restaurant data added', () => {
    const restarantArray = [
      {name: 'Duck Fat'},
      {name: 'Scales'}, 
      {name: 'Grace'}];

    const expected = [...restarantArray];
    const action = actions.createCards(restarantArray)

    expect(cardReducer(undefined, action)).toEqual(expected);
  });

  it('should replace the only state when new cards are fetched', () => {
    const restarantArray1 = [
      {name: 'Duck Fat'},
      {name: 'Scales'}, 
      {name: 'Grace'}];
    
    const restarantArray2= [
      {name: 'Fore Street'},
      {name: 'Walters'},
      {name: 'McDonalds'}];

    const expected = [...restarantArray2];

    const action = actions.createCards(restarantArray2);

    expect(cardReducer(restarantArray1, action)).toEqual(expected);
  });

});