import React, { useState } from "react";
import CardIncome from "./CardIncome";

const CardIncomeList = ({ incomes, setIncomes }) => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
      source: "",
      amount: "",
      income_date: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleAddIncome = (e) => {
      e.preventDefault();
      if (!formData.source || !formData.amount || !formData.income_date) return;
      setIncomes([...incomes, formData]);
      setFormData({ source: "", amount: "", income_date: "" });
      setShowModal(false);
    };
  
    return (
      <div>
        <div className="row">
            <div className="col-lg-2">  
            </div>
            <div className="col-lg-8">  
            <div className="d-flex justify-content-between mb-3">
            <h4 className="mb-0">List of Incomes</h4>
            <button className="btn btn-success" style={{backgroundColor: "#26D126", color: "white"}} onClick={() => setShowModal(true)}>
                + Add Income
            </button>
        </div>
            </div>
        </div>
  
        <div className="row">
        <div className="col-lg-2">  
        </div>
        <div className="col-lg-9"> 
        <div className="row">
        {incomes.length === 0 ? (
            <p className="text-center">No income data available</p>
          ) : (
            incomes.map((income, index) => (
              <CardIncome
                key={index}
                source={income.source}
                amount={income.amount}
                income_date={income.income_date}
              />
            ))
          )} 
        </div>
        </div>
        </div>
  
        {showModal && (
          <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)", width:"1500px" }}>
            <div className="modal-dialog modal-dialog-centered">
              <form onSubmit={handleAddIncome} className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Income</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Source</label>
                    <input
                      type="text"
                      className="form-control"
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Amount</label>
                    <input
                      type="number"
                      className="form-control"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="income_date"
                      value={formData.income_date}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-success" style={{backgroundColor: "#26D126", color: "white"}}>Add</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };
  

export default CardIncomeList;
