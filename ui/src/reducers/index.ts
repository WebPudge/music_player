import { combineReducers, createStore } from 'redux';
import PlayerStore from '../containers/Player/reducer';

export interface AppStoreType {
  PlayerStore: object;
}

const rootReducer = combineReducers({
  PlayerStore,
});

export default () => {
  return createStore(rootReducer);
};