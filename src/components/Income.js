import React from "react";

const Income = ({ totalIncome }) => {
  return (
    <div className="col-lg-3 col-md-6 col-12 income">
      <p className="label">Income</p>
      <div className="progress-container">
        <span className="progress-amount mb-2">Rp {totalIncome}</span>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default Income;
