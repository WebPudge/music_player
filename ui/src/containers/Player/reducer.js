import * as PlayerTypes from './constant';
import { fromJS } from 'immutable';

const PlayerStore = fromJS({
  number: 0,
});

export default (state = PlayerStore, action) => {
  switch (action.type) {
    case PlayerTypes.COUNT:
      return state.update('number', () => fromJS(action.number));
    default:
      return state;
  }
};