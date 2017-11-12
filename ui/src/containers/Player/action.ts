import * as PlayerTypes from './constant';

export const count = (num: number) => ({
  type: PlayerTypes.COUNT,
  countNumber: num + 1,
});

export const subtract = (num: number) => ({
  type: PlayerTypes.COUNT,
  countNumber: num - 1,
});

export interface PlayerActionsTypes {
  count: Function;
  subtract: Function;
}