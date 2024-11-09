import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

interface AutoimmuneQCProps {}

const AutoimmuneQC: React.FC<AutoimmuneQCProps> = () => {
  const navigate = useNavigate();
  const [selectedPanel, setSelectedPanel] = useState<string | null>(null);
  const [selectedANAOption, setSelectedANAOption] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Bar */}
      <div className="bg-white shadow">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate(-1)}
                  className="p-2 hover:bg-slate-100 rounded-full"
                >
                  <IoArrowBack className="text-slate-600" size={20} />
                </button>
                <button
                  onClick={() => navigate(1)}
                  className="p-2 hover:bg-slate-100 rounded-full"
                >
                  <IoArrowForward className="text-slate-600" size={20} />
                </button>
                <button
                  onClick={() => navigate('/admin-home')}
                  className="p-2 hover:bg-slate-100 rounded-full"
                >
                  <FaHome className="text-slate-600" size={20} />
                </button>
              </div>
              <h1 className="text-2xl font-semibold text-slate-800">Autoimmune QC Panels</h1>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">JD</span>
                </div>
                <span className="text-slate-600">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ANA Panel */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">ANA Panel</h2>
            <div className="space-y-3">
              <button
                onClick={() => setSelectedANAOption('qualitative')}
                className="w-full text-left px-4 py-2 rounded hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Qualitative
              </button>
              {/* Add more panel options as needed */}
            </div>
          </div>
          
          {/* Add more panels as needed */}
        </div>
      </div>
    </div>
  );
};

export default AutoimmuneQC; 