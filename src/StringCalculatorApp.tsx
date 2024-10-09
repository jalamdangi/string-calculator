import React, { useState } from "react";
import { add } from "./StringCalculator";

const StringCalculatorApp: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const sum = add(input);
      setResult(sum);
      setError(""); 
    } catch (err:any) {
      setError(err.message); 
      setResult(null);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>String Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers separated by commas or new lines"
          style={{ padding: "10px", width: "300px" }}
        />
        <button type="submit" style={{ marginLeft: "10px", padding: "10px 20px" }}>
          Calculate
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default StringCalculatorApp;
