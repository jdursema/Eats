import locationReducer from './location-reducer';
import userReducer from './user-reducer';
import cardReducer from './card-reducer';
import favoritesReducer from './favorites-reducer';
import { combineReducers } from 'redux';
import cuisineReducer from './cuisine-reducer';
import recommendationsReducer from './recommendations-reducer';


const rootReducer = combineReducers({
  location: locationReducer,
  user: userReducer,
  cards: cardReducer,
  favorites: favoritesReducer,
  cuisine: cuisineReducer,
  recommendations: recommendationsReducer
});

export default rootReducer;