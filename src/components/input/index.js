import React, { useState } from "react";

export default function Input(props) {
  let { addTask } = props;
  const [inputValue, setInputValue] = useState("");

  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  const resetInputField = (e) => {
    if (e.key === "Enter") {
      addTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <input
      value={inputValue}
      type="text"
      onKeyDown={resetInputField}
      className="form-control"
      onChange={handleUserInput}
      placeholder="List Item"
    />
  );
}
