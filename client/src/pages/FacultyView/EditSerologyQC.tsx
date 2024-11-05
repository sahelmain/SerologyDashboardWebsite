import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const qcItems = ["Autoimmune", "CRP", "CH50", "hCG", "Hepatitis", "HIV", "Ig Tests", "Mono", "RPR"];

const EditSerologyQC = () => {
  const [selectedQC, setSelectedQC] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSelectQC = (item: string) => {
    setSelectedQC(item);
  };

  const handleEdit = () => {
    if (selectedQC) {
      // Navigate to the editing page or display editing modal
      alert(`Editing QC File: ${selectedQC}`);
    }
  };

  const handleDelete = () => {
    if (selectedQC) {
      const confirmDelete = window.confirm(`Are you sure you want to delete QC File: ${selectedQC}?`);
      if (confirmDelete) {
        // Implement deletion logic here
        alert(`QC File ${selectedQC} has been deleted.`);
        setSelectedQC(null); // Deselect after deletion
      }
    }
  };

  return (
    <div className="edit-serology-qc-container">
      <div className="edit-serology-header">
        <button className="back-button" onClick={() => navigate(-1)}>⬅</button>
        <h2>Edit Serology QC</h2>
        <div className="home-logout-icons">
          <button className="home-icon" onClick={() => navigate('/admin-home')}>🏠</button>
          <button className="logout-icon" onClick={() => navigate('/login')}>🔗</button>
        </div>
      </div>

      <p className="instructions">1<sup>st</sup> – Select QC to Edit</p>
      <div className="qc-grid">
        {qcItems.map((item) => (
          <button
            key={item}
            className={`qc-item ${selectedQC === item ? 'selected' : ''}`}
            onClick={() => handleSelectQC(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="actions">
        <button 
          className={`edit-button ${selectedQC ? '' : 'disabled'}`} 
          onClick={handleEdit} 
          disabled={!selectedQC}
        >
          Edit QC File
        </button>
        <button 
          className={`delete-button ${selectedQC ? '' : 'disabled'}`} 
          onClick={handleDelete} 
          disabled={!selectedQC}
        >
          Delete QC File
        </button>
      </div>
    </div>
  );
};

export default EditSerologyQC;
