import type { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";
import LineChart from "../components/chart/LineChart";
import Form from "../components/form/Form";
import { AiOutlineInfoCircle, AiOutlineLineChart, AiOutlineBarChart, AiOutlineUnorderedList } from "react-icons/ai";
import BarChart from "../components/chart/BarChart";
import Stats from "../components/stats/Stats";

const Home: NextPage = () => {
  const [input, setinput] = useState<number>();
  const [counter, setcounter] = useState(0);
  const [heighestNumber, setheighestNumber] = useState(0);
  const [showInfo, setshowInfo] = useState(false);
  const [numberArray, setnumberArray] = useState<number[]>([]);
  const [histogramArray, sethistogramArray] = useState<{ [key: number]: number }>({});

  const calculate = useCallback((value: number) => {
    if (value < 1 || isNaN(value)) {
      alert("no");
      return;
    }
    setcounter((prev) => prev + 1);

    if (value % 2 === 0) {
      value = Math.round(value / 2);
    } else {
      value = value * 3 + 1;
    }
    setheighestNumber((state) => (state > value ? state : value));

    setnumberArray((prevState: number[]) => [...prevState, value]);

    if (value != 1) {
      calculate(value);
    }
  }, []);

  const findLeadingNumbers = useCallback(() => {
    for (let i = 0; i < numberArray.length; i++) {
      const leadingNumber = parseInt(numberArray[i].toString().split("")[0]);
      if (isNaN(leadingNumber)) {
        return;
      }
      sethistogramArray((prevState) => {
        return { ...prevState, [leadingNumber]: prevState[leadingNumber] ? prevState[leadingNumber] + 1 : 1 };
      });
    }
  }, [numberArray]);

  useEffect(() => {
    findLeadingNumbers();
  }, [findLeadingNumbers, numberArray]);

  return (
    <div className="p-5 md:p-20 h-full w-full">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-5">Collatz Conjecture</h1>
        <AiOutlineInfoCircle className="text-4xl font-bold cursor-pointer hover:scale-105 transition" onClick={() => setshowInfo((state) => !state)} />
      </div>
      <div className={`w-full  rounded bg-gray-100 mb-5 p-3 ${showInfo ? "visible" : "hidden"}`}>
        <h3 className="text-lg font-bold mb-3">What is Collatz Conjecture?</h3>
        <p>
          The Collatz conjecture is one of the most famous unsolved problems in mathematics. The conjecture asks whether repeating two simple arithmetic operations will eventually
          transform every positive integer into 1. It concerns sequences of integers in which each term is obtained from the previous term as follows: if the previous term is even,
          the next term is one half of the previous term. If the previous term is odd, the next term is 3 times the previous term plus 1. The conjecture is that these sequences
          always reach 1, no matter which positive integer is chosen to start the sequence.{" "}
        </p>
      </div>
      <Form input={input!} setInput={setinput} handleSubmit={handleSubmit} />
      <div className="grid grid-cols-1 md:grid-cols-2  space-y-3 md:space-y-0 ">
        <div className="p-3 md:p-5 shadow rounded">
          <div className="flex space-x-5">
            <AiOutlineLineChart className="text-lg md:text-3xl text-gray-200 font-bold cursor-pointer hover:scale-105 transition" />
            <h1 className="text-md md:text-lg font-bold mb-5">Collatz Conjecture</h1>
          </div>
          <LineChart numbers={numberArray} />
        </div>
        <div className="p-3 md:p-5 shadow rounded">
          <div className="flex space-x-5">
            <AiOutlineBarChart className="text-lg md:text-3xl text-gray-200 font-bold cursor-pointer hover:scale-105 transition" />
            <h1 className="text-md md:text-lg font-bold mb-5">Leading numbers</h1>
          </div>
          <BarChart numbers={histogramArray} />
        </div>
        <div className="  p-3 md:p-5 shadow rounded">
          <Stats
            heighestNumber={heighestNumber}
            evenNumbers={numberArray.filter((value, index) => value % 2 === 0).length ?? 0}
            oddNumbers={numberArray.filter((value, index) => value % 2 !== 0).length ?? 0}
            startingNumber={numberArray[0]}
            counter={counter}
          />
        </div>
      </div>
    </div>
  );

  function handleSubmit(e: React.MouseEvent<Element, MouseEvent>) {
    e.preventDefault();

    if (input === undefined) {
      alert("no");
      return;
    }
    setnumberArray([input!]);
    setinput(0);
    setheighestNumber(0);
    setcounter(0);
    sethistogramArray({});
    calculate(input!);
  }
};

export default Home;
