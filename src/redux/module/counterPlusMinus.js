// src/modules/counter.js

//액션을 여기서 정의해줌
const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE";

//액션크리에이터
export const plusOne = () => {
  return {
    type: PLUS_ONE,
    payload: 10,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
// useState의 setState 역할을 한다.
const counter = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    //액션 타입을 상수로 정의해줬을경우
    case PLUS_ONE:
      return { number: state.number + 1 };
    case MINUS_ONE:
      return { number: state.number - 1 };

    //액션 타입을 직접 적어줄경우
    // case "PLUS_ONE":
    //   return { number: state.number + 1 };
    // case "MINUS_ONE":
    //   return { number: state.number - 1 };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
