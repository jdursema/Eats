import * as actions from './index';
import { addFavoriteToState, addUserFavorites, removeFavoriteFromStore, logOut } from './index';

describe('All actions', () => {
  it('has a type of SET_LOCATION', () => {
    const locationObj = {name: 'Denver, CO'};
    const expected = {
      type: 'ADD_LOCATION',
      locationObj
    };
    expect(actions.addLocationToStore(locationObj)).toEqual(expected);
  });

  it('has a type of CREATE_CARDS', () => {
    const restaurantArray = [
      {name: 'Grace'},
      {name: 'Scales'},
      {name: 'The Corner Room'}
    ];

    const expected = {
      type: 'CREATE_CARDS',
      restaurantArray
    };
    expect(actions.addCardsToStore(restaurantArray)).toEqual(expected);
  });

  it('has a type of ADD_CUISINES', () => {
    const cuisinesArray = [
      {cuisine_name: 'Chinese',
        cuisine_id: 25},
      {cuisine_name: 'American',
        cuisine_id: 1}
    ];

    const expected = {
      type: 'ADD_CUISINES',
      cuisinesArray
    };

    expect(actions.addCusineIdsToStore(cuisinesArray)).toEqual(expected);
  });

  it('has a type of ADD_RECOMMENDATIONS', () => {
    const recommendationsArray = [
      {name: 'Grace'},
      {name: 'Scales'},
      {name: 'The Corner Room'}
    ];

    const expected = {
      type: 'ADD_RECOMMENDATIONS',
      recommendationsArray
    };
    expect(actions.addRecommendationsToStore(recommendationsArray)).toEqual(expected);
  });

  it('has a type of LOGIN', () => {
    const user = {email: 'jmdursema@gmail.com',
      password: 'password'
    };

    const expected = {
      type: 'LOGIN',
      user
    };
    expect(actions.signIn(user)).toEqual(expected);
  });

  it('has a type of ADD_ERROR', () => {
    const message = 'invalid email';

    const expected = {
      type: 'ADD_ERROR',
      message
    };

    expect(actions.createErrorMessage(message)).toEqual(expected);
  });

  it('has a type of CLEAR_ERROR', () => {
    const expected = {
      type: 'CLEAR_ERROR'
    };
    
    expect(actions.clearError()).toEqual(expected);
  });
  
  it('has a type of ADD_FAVORITE', () => {
    const cardData = [
      {name: 'Pats Pizza'},
      {name: 'Bruces Burritos'},
      {name: 'Romeos Pizza'}
    ];

    const expected = {
      type: 'ADD_FAVORITE',
      cardData
    };

    expect(addFavoriteToState(cardData)).toEqual(expected);
  });

  it('has a type of ADD_USER_FAVORITES', () => {
    const array = [
      {name: 'Scales'},
      {name: 'Nosh'},
      {name: 'Davids'}
    ];

    const expected = {
      type: 'ADD_USER_FAVORITES',
      array
    };

    expect(addUserFavorites(array)).toEqual(expected);
  });

  it('has a type of REMOVE_FAVORITE', () => {
    const cardData = {name: 'Scales'};

    const expected = {
      type: 'REMOVE_FAVORITE',
      cardData
    };

    expect(removeFavoriteFromStore(cardData)).toEqual(expected)
  });

  it('should have a type of LOG_OUT', () => {
    const expected = {
      type: 'LOG_OUT'
    };

    expect(logOut()).toEqual(expected);
  });

});