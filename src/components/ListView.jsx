import React from "react";
import "../App.css";

const ListView = ({
  numbers,
  removeFromList,
  resetList,
  toggleSort,
  sortAsc,
}) => {
  return (
    <div className="card">
      <div className="list-header">
        <p className="title">Numbers List</p>
        <div>
          <button className="reset-btn" onClick={resetList}>
            Reset
          </button>
          <button className="sort-btn" onClick={toggleSort}>
            Sort {sortAsc ? "↓" : "↑"}
          </button>
        </div>
      </div>

      {numbers.length > 0 ? (
        <div className="list-container">
          <ul>
            {numbers.map((num, index) => (
              <li key={num} className="list-item">
                <span>
                  {num}{" "}
                  <span style={{ color: "#9ca3af", fontSize: "12px" }}>
                    #{index + 1}
                  </span>
                </span>
                <span
                  className="delete-btn"
                  onClick={() => removeFromList(num)}
                >
                  ✕
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p style={{ color: "#9ca3af", textAlign: "center" }}>
          No numbers added
        </p>
      )}

      <div className="total-box">Total numbers: {numbers.length}</div>
    </div>
  );
};

export default ListView;
