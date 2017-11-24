import * as PlayerTypes from './constant';
import { fromJS } from 'immutable';
import { ImmutableFuncType } from '../../constant';

interface ActionType {
  type: string;
  countNumber?: number;
}

interface StoreType {
  countNumber: number;
}

export type PlayerStateTypes = StoreType & ImmutableFuncType;

const PlayerStore: PlayerStateTypes = fromJS({
  countNumber: 0,
});

export default (state = PlayerStore, action: ActionType) => {
  switch (action.type) {
    case PlayerTypes.COUNT:
      return state.update('countNumber', () => fromJS(action.countNumber));
    default:
      return state;
  }
};