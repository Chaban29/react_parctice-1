import React, { useState } from "react";
import cl from "./counter.module.scss";
import Button from "../Button/Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({});
  const [array, setArray] = useState([]);
  console.log(array);
  return (
    <div className={cl.counter}>
      <div className={cl.counter__content}>
        <div className={cl.counter__text}>
          <h1>{count}</h1>
          <Button onClick={() => setCount(count + 1)}>plus</Button>
          <Button onClick={() => setCount(count - 1)}>minus</Button>
          {/* <Button onClick={() => setObj({ ...obj, title: "Body", key: 20 })}>
            Show Object
          </Button> */}
          <Button onClick={() => setArray([...array, 1, 2, 3, 4, 5])}>
            Show Array
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
