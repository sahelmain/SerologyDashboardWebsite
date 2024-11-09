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

const AutoantibodyNegative: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AutoantibodyData>({
    qcFileName: 'Autoantibody Panel - Negative',
    qcLotNumber: '',
    qcExpirationDate: '',
    openDate: '',
    closedDate: '',
    reportType: 'qualitative',
    analytes: [
      { name: 'Anti-ds-DNA Negative', abbreviation: 'dsDNA Neg', expectedRange: 'Negative', minLevel: '', maxLevel: '' },
      { name: 'Anti-ss-DNA Negative', abbreviation: 'ssDNA Neg', expectedRange: 'Negative', minLevel: '', maxLevel: '' },
      { name: 'Anti-histone Negative', abbreviation: 'Hist Neg', expectedRange: 'Negative', minLevel: '', maxLevel: '' },
      { name: 'Anti-DNP Negative', abbreviation: 'DNP Neg', expectedRange: 'Negative', minLevel: '', maxLevel: '' },
      { name: 'Anti-Sm Negative', abbreviation: 'Sm Neg', expectedRange: 'Negative', minLevel: '', maxLevel: '' },
      { name: 'Anti-RNP Negative', abbreviation: 'RNP Neg', expectedRange: 'Negative', minLevel: '', maxLevel: '' },
      { name: 'Anti-SS-A Ro Negative', abbreviation: 'SS-A Neg', expectedRange: 'Negative', minLevel: '', maxLevel: '' },
      { name: 'Anti-SS-B La Negative', abbreviation: 'SS-B Neg', expectedRange: 'Negative', minLevel: '', maxLevel: '' },
      { name: 'Anti-Nucleolar Negative', abbreviation: 'RNA Pol Neg', expectedRange: 'Negative', minLevel: '', maxLevel: '' },
      { name: 'Anti-centromere Negative', abbreviation: 'CENP Neg', expectedRange: 'Negative', minLevel: '', maxLevel: '' },
      { name: 'Anti-Scl-70 Negative', abbreviation: 'Scl-70 Neg', expectedRange: 'Negative', minLevel: '', maxLevel: '' },
      { name: 'Anti-Jo-1 Negative', abbreviation: 'Jo-1 Neg', expectedRange: 'Negative', minLevel: '', maxLevel: '' }
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
            <div className="flex gap-4 text-sm mt-1">
              <span>Qualitative</span>
              <span>Levey-Jennings</span>
            </div>
          </div>
        </div>

        {/* Analytes Table */}
        <div className="mb-8">
          <div className="grid grid-cols-5 gap-4 mb-4">
            <div className="font-bold">Analyte</div>
            <div className="font-bold">Abbreviation</div>
            <div className="font-bold">Expected Range</div>
            <div className="font-bold">Min Level</div>
            <div className="font-bold">Max Level</div>
          </div>
          {formData.analytes.map((analyte, index) => (
            <div key={index} className="grid grid-cols-5 gap-4 mb-2">
              <div className="border border-blue-200 rounded p-2 bg-[#e3f2fd]">
                {analyte.name}
              </div>
              <div className="border border-blue-200 rounded p-2 bg-[#e3f2fd]">
                {analyte.abbreviation}
              </div>
              <div className="border border-blue-200 rounded p-2 bg-[#e3f2fd]">
                {analyte.expectedRange}
              </div>
              <input
                type="text"
                value={analyte.minLevel}
                className="border border-green-200 rounded p-2 bg-[#e8f5e9]"
                onChange={(e) => {
                  const newAnalytes = [...formData.analytes];
                  newAnalytes[index].minLevel = e.target.value;
                  setFormData({...formData, analytes: newAnalytes});
                }}
              />
              <input
                type="text"
                value={analyte.maxLevel}
                className="border border-green-200 rounded p-2 bg-[#e8f5e9]"
                onChange={(e) => {
                  const newAnalytes = [...formData.analytes];
                  newAnalytes[index].maxLevel = e.target.value;
                  setFormData({...formData, analytes: newAnalytes});
                }}
              />
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="text-sm text-red-600 mb-4">
          Note: QC Report Type – This designation identifies the type of report that will be generated in "Review Controls" of the Student View. Will the report have a Levey-Jennings chart (quantitative) or have an outcomes table (qualitative).
          * Faculty must check one
        </div>

        <div className="text-sm mb-8">
          Note: QC Panel - Faculty provides data from QC reagent package insert in each green square. For <span className="font-bold">Negative</span> Qualitative results, Titer = &lt;1:80. For <span className="font-bold">Positive</span> Qualitative results, Titer = &gt;1:80.
          <br />
          * For <span className="text-red-600">Indeterminant</span> Qualitative results, Titer = 1:80. Used as a Result option in "Results in Progress" for QC or patient results.
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
      </div>
    </div>
  );
};

export default AutoantibodyNegative;