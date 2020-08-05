import {ADD, SUB, ADD_RANDOM} from '../actions/actionTypes';

const initialState = {
  counter: 100
}

export default function counter1(state = initialState, action) {
  switch(action.type) {
    case 'ADD':
      return {
        counter: state.counter + 1
      }
    case 'SUB':
      return {
        counter: state.counter - 1
      }
    case 'ADD_RANDOM':
      return {
        counter: state.counter + Math.random()*10
      }

      // ==============================================================

    case ADD:
      return {
        counter: state.counter + 1
      }
    case SUB:
      return {
        counter: state.counter - 1
      }
    case ADD_RANDOM:
      return {
        counter: state.counter + Math.random()*10
      }
  }

  return state
}