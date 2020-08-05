import {ADD, ADD2, SUB, SUB2, ADD_RANDOM, ADD_NUMBER} from './actionTypes';

export function add() {
  return {
    type: ADD
  }
}

export function add2(number) {
  return {
    type: ADD2,
    value: number
  }
}

export function sub() {
  return {
    type: SUB
  }
}

export function sub2(number) {
  return {
    type: SUB2,
    value: number
  }
}

export function addRandom() {
  return {
    type: ADD_RANDOM
  }
}

export function addNumber(number) {
  return {
    type: ADD_NUMBER,
    value: number
  }
}

export function asyncNum(number) {
  return dispatch => {
    setTimeout(() => {
      dispatch(addNumber(number));
    }, 2000);
  }
}