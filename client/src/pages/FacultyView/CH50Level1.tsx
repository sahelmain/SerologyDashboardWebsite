import React, { useState } from 'react';
import NavBar from "../../components/NavBar";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';

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

const CH50Level1: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CH50Data>({
    qcFileName: 'CH50 Level I',
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

  // Calculate SD values when qcMean or standardDeviation changes
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
      minusThreeSd: '',
    };
  };

  // Update SD values when qcMean or standardDeviation changes
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

  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar name="CH50 Level I" />
      <div className="container mx-auto px-4 py-8">
        {/* Header Field Titles */}
        <div className="grid grid-cols-5 gap-4 mb-2">
          <div className="font-bold">QC File Name</div>
          <div className="font-bold">QC Lot Number</div>
          <div className="font-bold">QC Expiration Date</div>
          <div className="font-bold">Open Date</div>
          <div className="font-bold">Closed Date</div>
        </div>

        {/* Header Fields */}
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

        {/* QC Range Section Title */}
        <div className="font-bold mb-2">QC Range</div>

        {/* Analytes Table */}
        <div className="mb-8">
          <div className="grid grid-cols-13 gap-4 mb-4">
            <div className="font-bold">Analyte</div>
            <div className="font-bold">Abbreviation</div>
            <div className="font-bold">Units of Measure</div>
            <div className="font-bold">Min Level</div>
            <div className="font-bold">Max Level</div>
            <div className="font-bold">QC Mean</div>
            <div className="font-bold">Standard Deviation</div>
            <div className="font-bold">+1 SD</div>
            <div className="font-bold">-1 SD</div>
            <div className="font-bold">+2 SD</div>
            <div className="font-bold">-2 SD</div>
            <div className="font-bold">+3 SD</div>
            <div className="font-bold">-3 SD</div>
          </div>
          {formData.analytes.map((analyte, index) => (
            <div key={index} className="grid grid-cols-13 gap-4 mb-2">
              <div className="border border-blue-200 rounded p-2 bg-[#e3f2fd]">
                {analyte.name}
              </div>
              <div className="border border-blue-200 rounded p-2 bg-[#e3f2fd]">
                {analyte.abbreviation}
              </div>
              <input
                type="text"
                value={analyte.unitsOfMeasure}
                className="border border-green-200 rounded p-2 bg-[#e8f5e9]"
                onChange={(e) => {
                  const newAnalytes = [...formData.analytes];
                  newAnalytes[index].unitsOfMeasure = e.target.value;
                  setFormData({...formData, analytes: newAnalytes});
                }}
              />
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
              <input
                type="text"
                value={analyte.qcMean}
                className="border border-green-200 rounded p-2 bg-[#e8f5e9]"
                onChange={(e) => handleQCMeanOrSDChange(index, 'qcMean', e.target.value)}
              />
              <input
                type="text"
                value={analyte.standardDeviation}
                className="border border-green-200 rounded p-2 bg-[#e8f5e9]"
                onChange={(e) => handleQCMeanOrSDChange(index, 'standardDeviation', e.target.value)}
              />
              <div className="border border-blue-200 rounded p-2 bg-[#e3f2fd]">
                {analyte.plusOneSd}
              </div>
              <div className="border border-blue-200 rounded p-2 bg-[#e3f2fd]">
                {analyte.minusOneSd}
              </div>
              <div className="border border-blue-200 rounded p-2 bg-[#e3f2fd]">
                {analyte.plusTwoSd}
              </div>
              <div className="border border-blue-200 rounded p-2 bg-[#e3f2fd]">
                {analyte.minusTwoSd}
              </div>
              <div className="border border-blue-200 rounded p-2 bg-[#e3f2fd]">
                {analyte.plusThreeSd}
              </div>
              <div className="border border-blue-200 rounded p-2 bg-[#e3f2fd]">
                {analyte.minusThreeSd}
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="text-sm text-red-600 mb-4">
          Note: QC Report Type – This designation identifies the type of report that will be generated in "Review Controls" of the Student View. Will the report have a Levey-Jennings chart (quantitative) or have an outcomes table (qualitative).
        </div>

        <div className="text-sm mb-4">
          Note: QC Panel - Faculty provides data from QC reagent package insert in each green square
        </div>

        <div className="text-sm text-red-600 mb-8">
          Note: Equation for +SD's: QC Mean + (SD value) x (1 or 2 or 3)
          <br />
          Equation for -SD's: QC Mean - (SD value) x (1 or 2 or 3)
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

export default CH50Level1; 