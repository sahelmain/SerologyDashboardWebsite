import React, { useState } from 'react';
import NavBar from "../../components/NavBar";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';

interface ANAData {
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
  }[];
}

const ANAQualitative: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [formData, setFormData] = useState<ANAData>({
    qcFileName: 'ANA Panel',
    qcLotNumber: '1234A',
    qcExpirationDate: '12/31/2024',
    openDate: '09/04/2024',
    closedDate: '-/-/-',
    reportType: 'qualitative',
    analytes: [
      { name: 'ANA Negative', abbreviation: 'ANA-Neg', expectedRange: 'Negative' },
      { name: 'ANA Positive - Centromere', abbreviation: 'C-Pos', expectedRange: 'Positive' },
      { name: 'ANA Positive - Homogeneous', abbreviation: 'H-Pos', expectedRange: 'Positive' },
      { name: 'ANA Positive - Nucleolar', abbreviation: 'N-Pos', expectedRange: 'Positive' },
      { name: 'ANA Positive - Speckled', abbreviation: 'Sp-Pos', expectedRange: 'Positive' },
    ]
  });

  const handleSave = () => {
    console.log('Saving QC File:', formData);
    navigate('/faculty/edit-qc/autoimmune');
  };

  const handleReportTypeChange = (type: 'qualitative' | 'leveyJennings') => {
    setFormData(prev => ({
      ...prev,
      reportType: type
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Bar */}
      <div className="bg-white shadow">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full">
                  <IoArrowBack className="text-slate-600" size={20} />
                </button>
                <button onClick={() => navigate(1)} className="p-2 hover:bg-slate-100 rounded-full">
                  <IoArrowForward className="text-slate-600" size={20} />
                </button>
                <button onClick={() => navigate('/admin-home')} className="p-2 hover:bg-slate-100 rounded-full">
                  <FaHome className="text-slate-600" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header Section */}
        <div className="grid grid-cols-5 gap-4 mb-4">
          <div className="border border-blue-300 rounded p-2 bg-white">
            {formData.qcFileName}
          </div>
          <input
            type="text"
            value={formData.qcLotNumber}
            className="border border-green-200 rounded p-2 bg-[#e8f5e9]"
            onChange={(e) => setFormData({...formData, qcLotNumber: e.target.value})}
          />
          <input
            type="text"
            value={formData.qcExpirationDate}
            className="border border-green-200 rounded p-2 bg-[#e8f5e9]"
            onChange={(e) => setFormData({...formData, qcExpirationDate: e.target.value})}
          />
          <input
            type="text"
            value={formData.openDate}
            className="border border-green-200 rounded p-2 bg-[#e8f5e9]"
            onChange={(e) => setFormData({...formData, openDate: e.target.value})}
          />
          <div className="border border-green-200 rounded p-2 bg-[#e8f5e9]">
            {formData.closedDate}
          </div>
        </div>

        <div className="text-sm text-red-600 mb-8">
          Note: This information will be used in the "QC Review" section.
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
              <input
                type="text"
                value={analyte.expectedRange}
                className="border border-green-200 rounded p-2 bg-[#e8f5e9]"
                onChange={(e) => {
                  const newAnalytes = [...formData.analytes];
                  newAnalytes[index].expectedRange = e.target.value;
                  setFormData({...formData, analytes: newAnalytes});
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-sm text-red-600 mb-8">
          Note: This information will be used in the "QC Results", "QC Reports", and "Qualitative Tables" sections.
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-green-100 border border-green-300 rounded px-6 py-2 hover:bg-green-200"
          >
            Save QC File
          </button>
        </div>

        <div className="text-sm text-red-600 mt-8">
          Note: This information is used to build each QC Square in the QC Results screen and QC Reports of the Student View or Faculty View. See slides ___ of Student View ppt for QC results and Slide ___ of Student View for QC Report.
        </div>
      </div>
    </div>
  );
};

export default ANAQualitative; 