import { useState } from "react";

function Budget() {
  const [amount, setAmount] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <div className="col-lg-3 col-md-6 col-12 mt-5  budget">
      <p className="label">Your Budget</p>
      <div className="budget-info">
        <span className="amount">Rp {amount || 0}</span>
        <span className="currency">IDR</span>
      </div>

      <button onClick={() => setShowModal(true)} style={{backgroundColor: "#26D126", color: "white"}} className="btn btn-sm mt-2">
        Tambah Budget
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h5>Tambah Budget</h5>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Masukkan Total Budget "
              />
              <div className="mt-2">
                <button type="submit" style={{backgroundColor: "#26D126", color: "white"}} className="btn btn-sm me-2">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Budget;
