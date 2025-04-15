import React from "react";

const CardIncome = ({ source, amount, income_date }) => {
  return (
    <div class="card income-card">
        <div class="income-header">
            <div class="income-info">
                <h3 class="income-name">{source}</h3>
            </div>
            <div class="income-total">
                <p className="card-text">Rp {parseInt(amount).toLocaleString()}</p>
            </div>
        </div>
        <div class="income-body">
            <div class="income-details">
                <p className="card-text">{income_date}</p>
            </div>
        </div>
    </div>
  );
};

export default CardIncome;
