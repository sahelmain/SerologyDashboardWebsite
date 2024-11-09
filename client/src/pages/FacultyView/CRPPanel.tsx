import React, { useState } from 'react';
import NavBar from "../../components/NavBar";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';

interface CRPData {
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

const CRPPanel: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CRPData>({
    qcFileName: 'CRP Panel',
    qcLotNumber: '',
    qcExpirationDate: '',
    openDate: '',
    closedDate: '',
    reportType: 'qualitative',
    analytes: [
      { name: 'CRP Negative', abbreviation: 'CRP-Neg', expectedRange: 'Negative', minLevel: '', maxLevel: '' },
      { name: 'CRP Positive', abbreviation: 'CRP-Pos', expectedRange: 'Positive', minLevel: '', maxLevel: '' },
    ]
  });

  const handleSave = () => {
    console.log('Saving QC File:', formData);
    navigate('/faculty/edit-qc/crp');
  };

  const handleReportTypeChange = (type: 'qualitative' | 'leveyJennings') => {
    setFormData(prev => ({
      ...prev,
      reportType: type
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50">
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
            <input
              type="text"
              value={formData.qcFileName}
              className="border border-blue-200 rounded p-2 bg-[#e3f2fd] w-full"
              readOnly
            />
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
            <div className="flex gap-4 text-sm mt-1">
              <span>Qualitative</span>
              <span>Levey-Jennings</span>
            </div>
          </div>
        </div>

        {/* Analytes Table */}
        <div className="mb-8">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="font-bold">Analyte</div>
            <div className="font-bold">Abbreviation</div>
            <div className="font-bold">Expected Range</div>
          </div>
          {formData.analytes.map((analyte, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 mb-2">
              <div className="border border-blue-200 rounded p-2 bg-[#e3f2fd]">
                {analyte.name}
              </div>
              <div className="border border-blue-200 rounded p-2 bg-[#e3f2fd]">
                {analyte.abbreviation}
              </div>
              <div className="border border-blue-200 rounded p-2 bg-[#e3f2fd]">
                {analyte.expectedRange}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CRPPanel; 