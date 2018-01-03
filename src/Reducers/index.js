import locationReducer from './location-reducer';
import userReducer from './user-reducer';
import cardReducer from './card-reducer';
import favoritesReducer from './favorites-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  location: locationReducer,
  user: userReducer,
  cards: cardReducer,
  favorites: favoritesReducer
});

export default rootReducer;