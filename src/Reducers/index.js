import locationReducer from './location-reducer';
import userReducer from './user-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  location: locationReducer,
  user: userReducer
});

export default rootReducer;