import type { NextPage } from "next";
import React, { useCallback, useEffect, useMemo, useState } from "react";

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
      <form>
        <input type="number" value={isNaN(input) ? "0" : input} onChange={(e) => setinput(parseInt(e.target.value))} />
        <button type="submit" onClick={(e: React.MouseEvent) => handleSubmit(e)}>
          run calculations
        </button>
      </form>

      <div>{numberArray.toString()}</div>
      <div> Calculated: {counter.toString()} times</div>
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
