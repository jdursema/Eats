import recommendationsReducer from '../recommendations-reducer';
import * as actions from '../../Actions/index';

describe('recommendationsReducer', () => {
  it('should return the default state', () => {
    const expected = [];

    expect(recommendationsReducer(undefined, {})).toEqual(expected);
  });

  it('should return a new array of restuarants', () => {
    const restuarantArray = [
      {name: 'Scales'}, 
      {name: 'Grace'},
      {name: 'Duck Fat'}];
        
    const expected = restuarantArray;
    
    const action = 
      actions.addRecommendationsToStore(restuarantArray);

    expect(recommendationsReducer([], action)).toEqual(expected);
  });

  it('should replace the prior state when a new recommendations array is added', () => {
    const state = [
      {name: 'Fore Street'},
      {name: 'The Corner Room'},
      {name: 'Nosh'}
    ]

    const restuarantArray = [
      {name: 'Scales'}, 
      {name: 'Grace'},
      {name: 'Duck Fat'}];

    const expected = restuarantArray;

    const action = actions.addRecommendationsToStore(restuarantArray);

    expect(recommendationsReducer(state, action)).toEqual(expected);
  });

});