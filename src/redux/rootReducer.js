import signUpReducer from '@signUp/signUpReducer';
import homeReducer from '@home/homeReducer';
import {combineReducers} from 'redux';
const appReducer = combineReducers({
  signUpReducer,
  homeReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
