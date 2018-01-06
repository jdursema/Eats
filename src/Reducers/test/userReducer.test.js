import * as actions from '../../Actions';
import userReducer from '../user-reducer';

describe('userReducer', () => {
  it('should return the default state', () => {
    const expected = {};

    expect(userReducer(undefined, {})).toEqual(expected);
  });
  
  it('should add the user to state if logged in', () => {
    const user = {
      email: 'jmdursema@gmail.com',
      password: 'password'};
    const expected = user;
    const action = actions.signIn(user);

    expect(userReducer(undefined, action)).toEqual(expected);
  });
});