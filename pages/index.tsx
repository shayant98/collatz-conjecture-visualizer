import type { NextPage } from "next";
import React, { useCallback, useState } from "react";
import LineChart from "../components/chart/LineChart";
import Form from "../components/form/Form";

const Home: NextPage = () => {
  const [input, setinput] = useState(0);
  const [counter, setcounter] = useState(0);
  const [numberArray, setnumberArray] = useState<number[]>([]);

  const calculate = useCallback((value: number) => {
    setcounter((prev) => prev + 1);
    if (value % 2 === 0) {
      value = Math.round(value / 2);
    } else {
      value = value * 3 + 1;
    }

    setnumberArray((prevState: number[]) => [...prevState, value]);

    if (value != 1) {
      calculate(value);
    }
  }, []);

  return (
    <div>
      <Form input={input} setInput={setinput} handleSubmit={handleSubmit} />
      <LineChart numbers={numberArray} />
    </div>
  );

  function handleSubmit(e: React.MouseEvent<Element, MouseEvent>) {
    e.preventDefault();

    setnumberArray([input]);
    setinput(0);
    calculate(input);
  }
};

export default Home;
