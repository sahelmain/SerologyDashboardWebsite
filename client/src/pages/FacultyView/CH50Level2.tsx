import React, { useState } from 'react';
import NavBar from "../../components/NavBar";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

interface CH50Data {
  qcFileName: string;
  qcLotNumber: string;
  qcExpirationDate: string;
  openDate: string;
  closedDate: string;
  reportType: 'qualitative' | 'leveyJennings';
  analytes: {
    name: string;
    abbreviation: string;
    unitsOfMeasure: string;
    minLevel: string;
    maxLevel: string;
    qcMean: string;
    standardDeviation: string;
    plusOneSd: string;
    minusOneSd: string;
    plusTwoSd: string;
    minusTwoSd: string;
    plusThreeSd: string;
    minusThreeSd: string;
  }[];
}

const CH50Level2: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CH50Data>({
    qcFileName: 'CH50 Level II',
    qcLotNumber: '',
    qcExpirationDate: '',
    openDate: '',
    closedDate: '',
    reportType: 'qualitative',
    analytes: [
      {
        name: 'Compliment Hemolysis 50%',
        abbreviation: 'CH50',
        unitsOfMeasure: '',
        minLevel: '',
        maxLevel: '',
        qcMean: '',
        standardDeviation: '',
        plusOneSd: '',
        minusOneSd: '',
        plusTwoSd: '',
        minusTwoSd: '',
        plusThreeSd: '',
        minusThreeSd: ''
      }
    ]
  });

  const calculateSDValues = (mean: string, sd: string) => {
    const meanNum = parseFloat(mean);
    const sdNum = parseFloat(sd);
    
    if (!isNaN(meanNum) && !isNaN(sdNum)) {
      return {
        plusOneSd: (meanNum + (sdNum * 1)).toFixed(2),
        minusOneSd: (meanNum - (sdNum * 1)).toFixed(2),
        plusTwoSd: (meanNum + (sdNum * 2)).toFixed(2),
        minusTwoSd: (meanNum - (sdNum * 2)).toFixed(2),
        plusThreeSd: (meanNum + (sdNum * 3)).toFixed(2),
        minusThreeSd: (meanNum - (sdNum * 3)).toFixed(2),
      };
    }
    return {
      plusOneSd: '',
      minusOneSd: '',
      plusTwoSd: '',
      minusTwoSd: '',
      plusThreeSd: '',
      minusThreeSd: ''
    };
  };

  const handleAnalyteChange = (index: number, field: keyof typeof formData.analytes[0], value: string) => {
    const newAnalytes = [...formData.analytes];
    newAnalytes[index] = {
      ...newAnalytes[index],
      [field]: value
    };
    setFormData({...formData, analytes: newAnalytes});
  };

  const handleQCMeanOrSDChange = (index: number, field: 'qcMean' | 'standardDeviation', value: string) => {
    const newAnalytes = [...formData.analytes];
    newAnalytes[index][field] = value;
    
    const sdValues = calculateSDValues(
      field === 'qcMean' ? value : newAnalytes[index].qcMean,
      field === 'standardDeviation' ? value : newAnalytes[index].standardDeviation
    );
    
    newAnalytes[index] = {
      ...newAnalytes[index],
      ...sdValues
    };
    
    setFormData({...formData, analytes: newAnalytes});
  };

  const handleSave = () => {
    console.log('Saving QC File:', formData);
    navigate('/faculty/edit-qc/ch50');
  };

  const handleReportTypeChange = (type: 'qualitative' | 'leveyJennings') => {
    setFormData(prev => ({
      ...prev,
      reportType: type
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar name="CH50 Level II" />
      <div className="container mx-auto px-4 py-8">
        {/* Header Fields */}
        <div className="grid grid-cols-5 gap-4 mb-4">
          <div className="font-bold">QC File Name</div>
          <div className="font-bold">QC Lot Number</div>
          <div className="font-bold">QC Expiration Date</div>
          <div className="font-bold">Open Date</div>
          <div className="font-bold">Closed Date</div>
        </div>

        <div className="grid grid-cols-5 gap-4 mb-8">
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
          <input
            type="text"
            value={formData.closedDate}
            className="border border-green-200 rounded p-2 bg-[#e8f5e9]"
            onChange={(e) => setFormData({...formData, closedDate: e.target.value})}
          />
        </div>

        {/* Report Type */}
        <div className="flex justify-end mb-8">
          <div>
            <div className="font-bold mb-2">Report Type</div>
            <div className="flex gap-4">
              <button
                onClick={() => setFormData({...formData, reportType: 'qualitative'})}
                className="border border-green-200 rounded w-6 h-6 bg-[#e8f5e9] flex items-center justify-center"
              >
                {formData.reportType === 'qualitative' && 'X'}
              </button>
              <button
                onClick={() => setFormData({...formData, reportType: 'leveyJennings'})}
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

        {/* QC Range Section */}
        <div className="mb-8">
          <h2 className="text-center font-bold mb-4">QC Range</h2>
          
          {/* Titles Row */}
          <div className="flex mb-2">
            <div className="w-[200px] font-bold text-center mr-1">Analyte</div>
            <div className="w-[100px] font-bold text-center mr-1">Abbreviation</div>
            <div className="w-[120px] font-bold text-center mr-1">Units of Measure</div>
            <div className="w-[80px] font-bold text-center mr-1">Min Level</div>
            <div className="w-[80px] font-bold text-center mr-1">Max Level</div>
            <div className="w-[80px] font-bold text-center mr-1">QC Mean</div>
            <div className="w-[120px] font-bold text-center mr-1">Standard Deviation</div>
            <div className="w-[80px] font-bold text-center mr-1">+1 SD</div>
            <div className="w-[80px] font-bold text-center mr-1">-1 SD</div>
            <div className="w-[80px] font-bold text-center mr-1">+2 SD</div>
            <div className="w-[80px] font-bold text-center mr-1">-2 SD</div>
            <div className="w-[80px] font-bold text-center mr-1">+3 SD</div>
            <div className="w-[80px] font-bold text-center mr-1">-3 SD</div>
          </div>

          {/* Data Row */}
          <div className="flex">
            <div className="w-[200px] border border-blue-200 rounded p-1 bg-[#e3f2fd] text-sm mr-1">
              Compliment Hemolysis 50%
            </div>
            <div className="w-[100px] border border-blue-200 rounded p-1 bg-[#e3f2fd] text-sm text-center mr-1">
              CH50
            </div>
            <input
              type="text"
              className="w-[120px] border border-green-200 rounded p-1 bg-[#e8f5e9] text-sm mr-1"
              value={formData.analytes[0].unitsOfMeasure}
              onChange={(e) => handleAnalyteChange(0, 'unitsOfMeasure', e.target.value)}
            />
            <input
              type="text"
              className="w-[80px] border border-green-200 rounded p-1 bg-[#e8f5e9] text-sm mr-1"
              value={formData.analytes[0].minLevel}
              onChange={(e) => handleAnalyteChange(0, 'minLevel', e.target.value)}
            />
            <input
              type="text"
              className="w-[80px] border border-green-200 rounded p-1 bg-[#e8f5e9] text-sm mr-1"
              value={formData.analytes[0].maxLevel}
              onChange={(e) => handleAnalyteChange(0, 'maxLevel', e.target.value)}
            />
            <input
              type="text"
              className="w-[80px] border border-green-200 rounded p-1 bg-[#e8f5e9] text-sm mr-1"
              value={formData.analytes[0].qcMean}
              onChange={(e) => handleQCMeanOrSDChange(0, 'qcMean', e.target.value)}
            />
            <input
              type="text"
              className="w-[120px] border border-blue-200 rounded p-1 bg-[#e3f2fd] text-sm mr-1"
              value={formData.analytes[0].standardDeviation}
              onChange={(e) => handleQCMeanOrSDChange(0, 'standardDeviation', e.target.value)}
            />
            <div className="w-[80px] border border-blue-200 rounded p-1 bg-[#e3f2fd] text-sm mr-1">
              {formData.analytes[0].plusOneSd}
            </div>
            <div className="w-[80px] border border-blue-200 rounded p-1 bg-[#e3f2fd] text-sm mr-1">
              {formData.analytes[0].minusOneSd}
            </div>
            <div className="w-[80px] border border-blue-200 rounded p-1 bg-[#e3f2fd] text-sm mr-1">
              {formData.analytes[0].plusTwoSd}
            </div>
            <div className="w-[80px] border border-blue-200 rounded p-1 bg-[#e3f2fd] text-sm mr-1">
              {formData.analytes[0].minusTwoSd}
            </div>
            <div className="w-[80px] border border-blue-200 rounded p-1 bg-[#e3f2fd] text-sm mr-1">
              {formData.analytes[0].plusThreeSd}
            </div>
            <div className="w-[80px] border border-blue-200 rounded p-1 bg-[#e3f2fd] text-sm mr-1">
              {formData.analytes[0].minusThreeSd}
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="text-sm mb-4">
          Note: QC Panel - Faculty provides data from QC reagent package insert in each green square
        </div>

        <div className="text-sm text-red-600 mb-4">
          Note: Equation for +SD's: QC Mean + (SD value) x (1 or 2 or 3)
          <br />
          Equation for -SD's: QC Mean - (SD value) x (1 or 2 or 3)
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={() => navigate('/faculty/edit-qc/ch50')}
            className="bg-green-100 border border-green-300 rounded px-6 py-2 hover:bg-green-200"
          >
            Save QC File
          </button>
        </div>
      </div>
    </div>
  );
};

export default CH50Level2; 