import { SET_COUNTER } from './types';

export function incrementAction() {
  return { type: 'INCREMENT' };
}

export function incrementCountererAction() {
  return { type: 'INCREMENT_OTHER_COUNTER' };
}

export function setAction(value) {
  return { type: SET_COUNTER, payload: value };
}
