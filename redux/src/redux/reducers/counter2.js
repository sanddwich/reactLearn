import { ADD2, SUB2, ADD_NUMBER } from '../actions/actionTypes';

const initialState = {
  counter: 200,
};

export default function counter2(state = initialState, action) {
  switch (action.type) {
    case 'ADD2':
      return {
        counter: state.counter + action.value,
      };
    case 'SUB2':
      return {
        counter: state.counter - action.value,
      };
    case 'ADD_RANDOM':
      return {
        counter: state.counter + Math.random() * 10,
      };

    //================================================

    case ADD2:
      return {
        counter: state.counter + action.value,
      };
    case SUB2:
      return {
        counter: state.counter - action.value,
      };
    case ADD_NUMBER:
      return {
        counter: state.counter + action.value,
      };
  }

  return state;
}
