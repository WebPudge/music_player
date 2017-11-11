import * as PlayerTypes from './constant';

export const count = number => ({
  type: PlayerTypes.COUNT,
  countNumber: number + 1,
});

export const subtract = number => ({
  type: PlayerTypes.COUNT,
  countNumber: number - 1,
});