import React, { useState } from 'react';
import NavBar from "../../components/NavBar";
import { useNavigate } from 'react-router-dom';

interface HCGData {
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

const HCGPositive: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<HCGData>({
    qcFileName: 'Serum hCG Positive Panel',
    qcLotNumber: '',
    qcExpirationDate: '',
    openDate: '',
    closedDate: '',
    reportType: 'qualitative',
    analytes: [
      { name: 'Serum hCG Positive', abbreviation: 'hCG-Pos', expectedRange: 'Positive' },
      { name: 'hCG-Pos Internal Control', abbreviation: 'hCG-Pos Int Control', expectedRange: 'Valid' }
    ]
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar name="Serum hCG Positive Panel" />
      <div className="container mx-auto px-4 py-8">
        {/* Header Fields */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <div>
            <div className="font-bold mb-2">QC File Name</div>
            <div className="border border-blue-200 rounded p-2 bg-[#e3f2fd]">
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
        <div className="mb-8">
          <div className="flex justify-end items-center gap-4">
            <div className="text-right">
              <div className="font-bold">Report Type</div>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <span className="font-bold">Qualitative</span>
                  <input
                    type="text"
                    value={formData.reportType === 'qualitative' ? 'X' : ''}
                    onChange={() => setFormData({...formData, reportType: 'qualitative'})}
                    className="w-8 h-8 border border-green-200 rounded bg-[#e8f5e9] text-center"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold">Levey-Jennings</span>
                  <input
                    type="text"
                    value={formData.reportType === 'leveyJennings' ? 'X' : ''}
                    onChange={() => setFormData({...formData, reportType: 'leveyJennings'})}
                    className="w-8 h-8 border border-green-200 rounded bg-[#e8f5e9] text-center"
                  />
                </div>
              </div>
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

export default HCGPositive; 