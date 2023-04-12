// src/App.js

import React from "react";
import { useSelector, useDispatch } from "react-redux"; // import 해주세요.
import { minusOne, plusOne } from "./redux/module/counter";

const App = () => {
  // const counterStore = useSelector((state) => state); //store에 저장된 모든 데이터
  const dispatch = useDispatch();

  const number = useSelector((state) => state.counter.number);
  console.log(number);

  return (
    <div>
      {number}
      {/*//액션을 상수로 만들경우
      사용가능*/}
      <button onClick={dispatch(plusOne)}>+1</button>
      <button onClick={dispatch(minusOne)}>-1</button>
      {/* <button onClick={dispatch({ type: "PLUS_ONE" })}>+1</button>
      <button onClick={dispatch({ type: "MINUS_ONE" })}>-1</button> */}
    </div>
  );
};

export default App;
