import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import ListView from "./components/ListView";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(() => {
    const saved = localStorage.getItem("numbers");
    return saved ? JSON.parse(saved) : [];
  });
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    localStorage.setItem("numbers", JSON.stringify(numbers));
  }, [numbers]);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  const addToList = () => {
    if (count > 0 && !numbers.includes(count)) {
      setNumbers([...numbers, count]);
      setCount(0);
    }
  };

  const removeFromList = (num) => {
    setNumbers(numbers.filter((n) => n !== num));
  };

  const resetList = () => setNumbers([]);

  const toggleSort = () => {
    setSortAsc(!sortAsc);
    setNumbers([...numbers].sort((a, b) => (sortAsc ? a - b : b - a)));
  };

  return (
    <div className="app-container">
      <h1 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "20px" }}>
        Counter & List App
      </h1>
      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
        addToList={addToList}
      />
      <ListView
        numbers={numbers}
        removeFromList={removeFromList}
        resetList={resetList}
        toggleSort={toggleSort}
        sortAsc={sortAsc}
      />
    </div>
  );
};

export default App;
