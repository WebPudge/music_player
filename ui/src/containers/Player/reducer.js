import * as PlayerTypes from './constant';
import { fromJS } from 'immutable';

const PlayerStore = fromJS({
  countNumber: 0,
});

export default (state = PlayerStore, action) => {
  switch (action.type) {
    case PlayerTypes.COUNT:
      return state.update('countNumber', () => fromJS(action.countNumber));
    default:
      return state;
  }
};