import { combineReducers, createStore } from 'redux';
import PlayerStore from '../containers/Player/reducer';
const rootReducer = combineReducers({
  PlayerStore,
});

export default initialState => {
  return createStore(rootReducer, initialState);
};