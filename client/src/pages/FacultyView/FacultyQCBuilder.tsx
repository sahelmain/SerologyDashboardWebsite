import React from "react";

const FacultyQCBuilder = () => {
  return (
    <div className="container mx-auto mt-10 p-5">
      <h2 className="text-2xl font-bold text-center mb-6">Serology QC Builder</h2>
      <div className="flex gap-10">
        {/* Left Panel */}
        <div className="flex-1 border border-gray-300 p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-3">Serology QC Panels</h3>
          <p>Here you can manage existing QC panels for Serology.</p>
        </div>

        {/* Right Panel */}
        <div className="flex-1 border border-gray-300 p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-3">Create New Panel</h3>
          <p>Click here to start creating a new QC panel for Serology.</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyQCBuilder;
