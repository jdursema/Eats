import * as actions from './index';

describe('All actions', () => {
  it('has a type of SET_LOCATION', () => {
    const location = ['Denver, CO'];
    const expected = {
      type: 'SET_LOCATION',
      location
    };
    expect(actions.setLocation(location)).toEqual(expected);
  });

  it ('has a type of LOGIN', () => {
    const user = {email: 'jmdursema@gmail.com',
  password: 'password'}
    const expected = {
      type: 'LOGIN',
      user
    }
    expect(actions.checkUser(user)).toEqual(expected);
  })

})