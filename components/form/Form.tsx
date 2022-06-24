import React from "react";

const Form = ({ input, setInput, handleSubmit }: { input: number; setInput: React.Dispatch<React.SetStateAction<number>>; handleSubmit: (e: React.MouseEvent) => void }) => {
  return (
    <form>
      <input type="number" value={isNaN(input) ? "0" : input} onChange={(e) => setInput(parseInt(e.target.value))} />
      <button type="submit" onClick={(e: React.MouseEvent) => handleSubmit(e)}>
        run calculations
      </button>
    </form>
  );
};

export default Form;
