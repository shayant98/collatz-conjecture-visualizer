import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";

const Stats = ({
  heighestNumber,
  startingNumber,
  counter,
  evenNumbers,
  oddNumbers,
}: {
  heighestNumber: number;
  startingNumber: number;
  counter: number;
  evenNumbers: number[] | number;
  oddNumbers: number[] | number;
}) => {
  return (
    <>
      <div className="flex space-x-5">
        <AiOutlineUnorderedList className="text-lg md:text-3xl text-gray-200 font-bold cursor-pointer hover:scale-105 transition" />
        <h1 className="text-md md:text-lg font-bold mb-5">Stats</h1>
      </div>
      <div className="flex justify-between">
        <p>Starting number</p>
        <p className="font-bold">{startingNumber ?? 0} </p>
      </div>
      <div className="flex justify-between">
        <p>Heighest number</p>
        <p className="font-bold">{heighestNumber}</p>
      </div>
      <div className="flex justify-between">
        <p>Full cycle iterations</p>
        <p className="font-bold">{counter + 1}</p>
      </div>
      <div className="flex justify-between">
        <p>Even numbers in cycle</p>
        <p className="font-bold"> {evenNumbers}</p>
      </div>
      <div className="flex justify-between">
        <p>Odd numbers in cycle</p>
        <p className="font-bold">{oddNumbers}</p>
      </div>
    </>
  );
};

export default Stats;
