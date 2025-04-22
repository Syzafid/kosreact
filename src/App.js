import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Budget from "./components/Budget";
import Income from "./components/Income";
import Outcome from "./components/outcome";
import "./components/Content.css"
import CardIncomeList from './components/CardIncomeList';

function App() {
  const [incomes, setIncomes] = useState([]);

  const totalIncome = incomes.reduce((sum, income) => sum + Number(income.amount), 0);

  return (
    <div>
      <Navbar userName="Ihsan" jobTitle="Fullstack Developer" />
      <div className="content">
        <div className="row align-items-center">
          <div className="col-lg-2 col-12"></div>
          <Budget />
          <Income totalIncome={totalIncome} />
          <Outcome />
        </div>
        <div className="row align-items-center">
          <div className="col-lg-2 col-12"></div>
          <CardIncomeList incomes={incomes} setIncomes={setIncomes} />
        </div>
      </div>
    </div>
  );
}

export default App;
