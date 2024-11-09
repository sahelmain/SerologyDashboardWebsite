import React from "react";
import { useNavigate } from "react-router-dom";

const FacultyQCBuilder = () => {
  const navigate = useNavigate();

  const handleCreateNewPanelClick = () => {
    alert('Create New Panel functionality not implemented yet');
  };

  return (
    <div className="container mx-auto mt-10 p-5">
      <h2 className="text-2xl font-bold text-center mb-6">Serology QC Builder</h2>
      <div className="flex gap-10">
        {/* Left Panel */}
        <div
          className="flex-1 border border-gray-300 p-4 rounded-md shadow-md cursor-pointer hover:bg-gray-100"
          onClick={() => navigate('/faculty/edit-serology-qc')}
        >
          <h3 className="text-xl font-semibold mb-3">Serology QC Panels</h3>
          <p>Here you can manage existing QC panels for Serology.</p>
        </div>

        {/* Right Panel */}
        <div
          className="flex-1 border border-gray-300 p-4 rounded-md shadow-md cursor-pointer hover:bg-gray-100"
          onClick={handleCreateNewPanelClick}
        >
          <h3 className="text-xl font-semibold mb-3">Create New Panel</h3>
          <p>Click here to start creating a new QC panel for Serology.</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyQCBuilder;
