import React from "react";
import "../App.css";

const Counter = ({ count, increment, decrement, addToList }) => {
  return (
    <div className="card">
      <p className="title">Counter</p>
      <div className="counter-buttons">
        <button className="circle-btn" onClick={decrement}>
          -
        </button>
        <span className="counter-value">{count}</span>
        <button className="circle-btn" onClick={increment}>
          +
        </button>
      </div>
      <button className="add-btn" onClick={addToList}>
        Add to List
      </button>
    </div>
  );
};

export default Counter;
