import React, { useState } from 'react';
import NavBar from "../../components/NavBar";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';

interface AutoantibodyData {
  qcFileName: string;
  qcLotNumber: string;
  qcExpirationDate: string;
  openDate: string;
  closedDate: string;
  reportType: 'qualitative' | 'leveyJennings';
  analytes: {
    name: string;
    abbreviation: string;
    expectedRange: string;
    minLevel: string;
    maxLevel: string;
  }[];
}

const AutoantibodyPositive: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AutoantibodyData>({
    qcFileName: 'Autoantibody Panel - Positive',
    qcLotNumber: '',
    qcExpirationDate: '',
    openDate: '',
    closedDate: '',
    reportType: 'qualitative',
    analytes: [
      { name: 'Anti-ds-DNA Positive', abbreviation: 'dsDNA Pos', expectedRange: 'Positive', minLevel: '', maxLevel: '' },
      { name: 'Anti-ss-DNA Positive', abbreviation: 'ssDNA Pos', expectedRange: 'Positive', minLevel: '', maxLevel: '' },
      { name: 'Anti-histone Positive', abbreviation: 'Hist Pos', expectedRange: 'Positive', minLevel: '', maxLevel: '' },
      { name: 'Anti-DNP Positive', abbreviation: 'DNP Pos', expectedRange: 'Positive', minLevel: '', maxLevel: '' },
      { name: 'Anti-Sm Positive', abbreviation: 'Sm Pos', expectedRange: 'Positive', minLevel: '', maxLevel: '' },
      { name: 'Anti-RNP Positive', abbreviation: 'RNP Pos', expectedRange: 'Positive', minLevel: '', maxLevel: '' },
      { name: 'Anti-SS-A Ro Positive', abbreviation: 'SS-A Pos', expectedRange: 'Positive', minLevel: '', maxLevel: '' },
      { name: 'Anti-SS-B La Positive', abbreviation: 'SS-B Pos', expectedRange: 'Positive', minLevel: '', maxLevel: '' },
      { name: 'Anti-Nucleolar Positive', abbreviation: 'RNA Pol Pos', expectedRange: 'Positive', minLevel: '', maxLevel: '' },
      { name: 'Anti-centromere Positive', abbreviation: 'CENP Pos', expectedRange: 'Positive', minLevel: '', maxLevel: '' },
      { name: 'Anti-Scl-70 Positive', abbreviation: 'Scl-70 Pos', expectedRange: 'Positive', minLevel: '', maxLevel: '' },
      { name: 'Anti-Jo-1 Positive', abbreviation: 'Jo-1 Pos', expectedRange: 'Positive', minLevel: '', maxLevel: '' }
    ]
  });

  const handleSave = () => {
    console.log('Saving QC File:', formData);
    navigate('/faculty/edit-qc/autoantibody');
  };

  const handleReportTypeChange = (type: 'qualitative' | 'leveyJennings') => {
    setFormData(prev => ({
      ...prev,
      reportType: type
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Bar */}
      <div className="bg-white shadow">
        <div className="mx-auto px-4">
          <div className="flex h-16 items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full">
              <IoArrowBack size={20} />
            </button>
            <button onClick={() => navigate('/admin-home')} className="p-2 hover:bg-slate-100 rounded-full">
              <FaHome size={20} />
            </button>
            <button onClick={() => navigate(1)} className="p-2 hover:bg-slate-100 rounded-full">
              <IoArrowForward size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header Fields */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <div>
            <div className="font-bold mb-2">QC File Name</div>
            <div className="border border-blue-300 rounded p-2 bg-white">
              {formData.qcFileName}
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">QC Lot Number</div>
            <input
              type="text"
              value={formData.qcLotNumber}
              className="border border-green-200 rounded p-2 bg-[#e8f5e9] w-full"
              onChange={(e) => setFormData({...formData, qcLotNumber: e.target.value})}
            />
          </div>
          <div>
            <div className="font-bold mb-2">QC Expiration Date</div>
            <input
              type="text"
              value={formData.qcExpirationDate}
              className="border border-green-200 rounded p-2 bg-[#e8f5e9] w-full"
              onChange={(e) => setFormData({...formData, qcExpirationDate: e.target.value})}
            />
          </div>
          <div>
            <div className="font-bold mb-2">Open Date</div>
            <input
              type="text"
              value={formData.openDate}
              className="border border-green-200 rounded p-2 bg-[#e8f5e9] w-full"
              onChange={(e) => setFormData({...formData, openDate: e.target.value})}
            />
          </div>
          <div>
            <div className="font-bold mb-2">Closed Date</div>
            <input
              type="text"
              value={formData.closedDate}
              className="border border-green-200 rounded p-2 bg-[#e8f5e9] w-full"
              onChange={(e) => setFormData({...formData, closedDate: e.target.value})}
            />
          </div>
        </div>

        {/* Report Type Section */}
        <div className="flex justify-end mb-8">
          <div>
            <div className="font-bold mb-2">Report Type</div>
            <div className="flex gap-4">
              <button
                onClick={() => handleReportTypeChange('qualitative')}
                className="border border-green-200 rounded w-6 h-6 bg-[#e8f5e9] flex items-center justify-center"
              >
                {formData.reportType === 'qualitative' && 'X'}
              </button>
              <button
                onClick={() => handleReportTypeChange('leveyJennings')}
                className="border border-green-200 rounded w-6 h-6 bg-[#e8f5e9] flex items-center justify-center"
              >
                {formData.reportType === 'leveyJennings' && 'X'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoantibodyPositive; 