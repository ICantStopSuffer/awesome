"use client"
import Sidebar from "@/modules/sidebar";
import { useState } from "react";
import { submitTest } from "./recieve.js"

export default function getEmployeeId({params}) {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form action={submitTest}>
      <input
        name="name"
        id="name"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <p>Current input value: {inputValue}</p>
    </form>
  );
}