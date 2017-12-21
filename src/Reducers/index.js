import locationReducer from './location-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  location: locationReducer
});

export default rootReducer;