import * as actions from '../../Actions';
import locationReducer from '../location-reducer';

describe('locationReducer', () => {
  it('should return the default state', () => {
    const expected = {};

    expect(locationReducer(undefined, {})).toEqual(expected);
  });

  it('should reutnr a new state with the new location', () => {
    const location = {name: 'Portland, ME', lat: 43, lng: 70};
    const expected = location;
    const action = actions.addLocationToStore(location);

    expect(locationReducer(undefined, action)).toEqual(expected);
  });
});