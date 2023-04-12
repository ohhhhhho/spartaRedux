// src/modules/counter.js

//Action Value
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";

//ACtion Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    // payload: payload, 이름이 동일하면 아래처럼 하나로 작성 가능 (똑같은 의미임)
    payload,
  };
};

export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload,
  };
};

//Initial State
const initialState = {
  number: 0,
};

//Reducer

const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER: {
      return {
        number: state.number + action.payload,
      };
    }
    case MINUS_NUMBER: {
      return {
        number: state - action.payload,
      };
    }
    default:
      return state;
  }
};

//export default reducer
export default counter;
