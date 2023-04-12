// src/App.js

import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // import 해주세요.
import { addNumber, minusNumber } from "./redux/module/counter";

const App = () => {
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    const { value } = e.target;
    setNumber(+value); // +는 숫자로 형변환 해주기 위해 사용함
  };
  const onClickAdd = () => {
    dispatch(addNumber(number));
  };
  const onClickMinus = () => {
    dispatch(minusNumber(number));
  };

  return (
    <div>
      {globalNumber}
      <input type="number" onChange={onChangeHandler} value={number} />
      <button onClick={onClickAdd}>더하기</button>
      <button onClick={onClickMinus}>빼기</button>
    </div>
  );
};

export default App;
