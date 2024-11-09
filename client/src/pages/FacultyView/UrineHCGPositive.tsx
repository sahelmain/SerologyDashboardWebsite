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

const UrineHCGPositive: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<HCGData>({
    qcFileName: 'Urine hCG Positive Panel',
    qcLotNumber: '',
    qcExpirationDate: '',
    openDate: '',
    closedDate: '',
    reportType: 'qualitative',
    analytes: [
      { name: 'Urine hCG Positive', abbreviation: 'hCG-Pos', expectedRange: 'Positive' },
      { name: 'hCG-Pos Internal Control', abbreviation: 'hCG-Pos Int Control', expectedRange: 'Valid' }
    ]
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar name="Urine hCG Positive Panel" />
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
        <div className="mb-8">
          <div className="flex justify-end items-center gap-4">
            <div className="text-right">
              <div className="font-bold">Report Type</div>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <span className="font-bold">Qualitative</span>
                  <div
                    onClick={() => setFormData({...formData, reportType: 'qualitative'})}
                    className="w-8 h-8 border border-green-200 rounded bg-[#e8f5e9] text-center flex items-center justify-center cursor-pointer"
                  >
                    {formData.reportType === 'qualitative' ? 'X' : ''}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold">Levey-Jennings</span>
                  <div
                    onClick={() => setFormData({...formData, reportType: 'leveyJennings'})}
                    className="w-8 h-8 border border-green-200 rounded bg-[#e8f5e9] text-center flex items-center justify-center cursor-pointer"
                  >
                    {formData.reportType === 'leveyJennings' ? 'X' : ''}
                  </div>
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

        {/* Notes */}
        <div className="text-sm text-red-600 mb-4">
          Note: QC Report Type – This designation identifies the type of report that will be generated in "Review Controls" of the Student View. Will the report have a Levey-Jennings chart (quantitative) or have an outcomes table (qualitative).
        </div>

        <div className="text-sm mb-8">
          Note: QC Panel - Faculty provides data from QC reagent package insert in each green square.
          <br />• For <span className="font-bold">Qualitative results</span>, options that faculty can enter are: <span className="font-bold">Negative</span> or <span className="font-bold">Positive</span>. Numerical values will not be used.
          <br />• For Internal Controls, options that faculty can enter are: <span className="font-bold">Valid</span>. Students will have the option of enter <span className="font-bold">Valid</span> or Invalid for test results in "Results in Progress".
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={() => navigate('/faculty/urine-hcg-panel')}
            className="bg-green-100 border border-green-300 rounded px-6 py-2 hover:bg-green-200"
          >
            Save QC File
          </button>
        </div>
      </div>
    </div>
  );
};

export default UrineHCGPositive; 