import React from "react";

const Form = ({
  input,
  setInput,
  handleSubmit,
}: {
  input: number;
  setInput: React.Dispatch<React.SetStateAction<number | undefined>>;
  handleSubmit: (e: React.MouseEvent) => void;
}) => {
  return (
    <>
      <form className="flex mb-5">
        <input
          className="form-control w-full bg-gray-300 p-3 rounded
        transition
        ease-in-out
        mr-10
         focus:outline-none"
          type="number"
          placeholder="Add a positive number"
          value={isNaN(input) ? "" : input}
          onChange={(e) => setInput(parseInt(e.target.value))}
        />
        <button className="bg-yellow-300 rounded text-sm px-2 py-1.5 hover:scale-125 transition" type="submit" onClick={(e: React.MouseEvent) => handleSubmit(e)}>
          Calculate
        </button>
      </form>
    </>
  );
};

export default Form;
