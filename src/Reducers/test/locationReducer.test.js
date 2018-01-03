import * as actions from '../../Actions';
import locationReducer from '../location-reducer';

describe('locationReducer', () => {
  it('should return the default state', () => {
    const expected = '';

    expect(locationReducer(undefined, {})).toEqual(expected);
  });

  it('should reutnr a new state with the new location', () => {
    const location = 'Portland, ME';
    const expected = location;
    const action = actions.setLocation(location);

    expect(locationReducer(undefined, action)).toEqual(expected);
  });
});