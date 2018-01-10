import * as actions from '../../Actions';
import errorReducer from '../error-reducer';

describe('errorReducer', () => {
  it('should add an error message to the store', () => {
    const message = 'invalid email';

    const action = actions.createErrorMessage(message);

    const expected = message;

    expect(errorReducer('', action)).toEqual(expected);
  });

  it('should clear the error message', () => {
    const state = 'invalid email';

    const action = actions.clearError();

    const expected = '';

    expect(errorReducer(state, action)).toEqual(expected);
  });

});