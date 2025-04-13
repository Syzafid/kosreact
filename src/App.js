import logo from './python.png';
import './App.css';
import Navbar from './components/Navbar';
import Budget from "./components/Budget";
import Income from "./components/Income";
import Outcome from "./components/outcome";
import "./components/Content.css"

function App() {
  return (
    <div>
      <Navbar userName="Ihsan" jobTitle="Fullstack Developer" />
      <div class="content">
            <div class="row align-items-center">
                <div class="col-lg-2 col-12">
                </div>
                <Budget />
                <Income />
                <Outcome />
            </div>
        </div>
    </div>
  );
  
}

export default App;
