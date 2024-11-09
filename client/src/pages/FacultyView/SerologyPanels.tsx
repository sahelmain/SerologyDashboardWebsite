import React, { useState } from 'react';
import NavBar from "../../components/NavBar";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const SerologyPanels: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [selectedPanel, setSelectedPanel] = useState<string | null>(null);

  const handlePanelClick = (panel: string) => {
    setSelectedPanel(panel);
  };

  const handleEditQC = () => {
    if (selectedPanel) {
      switch(selectedPanel) {
        case "Autoimmune":
          navigate('/faculty/edit-qc/autoimmune');
          break;
        case "CRP":
          navigate('/faculty/edit-qc/crp');
          break;
        case "CH50":
          navigate('/faculty/edit-qc/ch50');
          break;
        case "hCG":
          navigate('/faculty/edit-qc/hcg');
          break;
        default:
          console.log(`Editing ${selectedPanel} panel`);
      }
    } else {
      alert("Please select a panel first");
    }
  };

  const handleDeleteQC = () => {
    if (selectedPanel) {
      const confirmDelete = window.confirm(`Are you sure you want to delete ${selectedPanel} panel?`);
      if (confirmDelete) {
        console.log(`Deleted ${selectedPanel} panel`);
        setSelectedPanel(null);
      }
    } else {
      alert("Please select a panel first");
    }
  };

  return (
    <>
      <NavBar name="Serology QC Panels" />
      <div className="flex flex-col items-center gap-8" style={{ minWidth: "100svw", minHeight: "90svh" }}>
        <div className="grid grid-cols-3 gap-8 mt-8">
          {/* Panel Buttons */}
          {[
            "Autoimmune",
            "CRP",
            "CH50",
            "hCG",
            "Hepatitis",
            "HIV",
            "IG Tests",
            "Mono",
            "RPR"
          ].map((panel) => (
            <button
              key={panel}
              onClick={() => handlePanelClick(panel)}
              className={`!rounded-lg sm:w-80 sm:h-36 !border-[1px] !border-solid transition ease-in-out p-6
                ${selectedPanel === panel
                  ? `!bg-[#8faadc] !border-[#2F528F] !border-[4px]`
                  : `!bg-[${theme.secondaryColor}] !border-[#47669C] hover:!bg-[#8faadc] hover:!border-[#2F528F] hover:!border-[4px]`
                }`}
            >
              <div className="button-text font-bold text-2xl">{panel}</div>
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleEditQC}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Edit QC File
          </button>
          <button
            onClick={handleDeleteQC}
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
          >
            Delete QC File
          </button>
        </div>
      </div>
    </>
  );
};

export default SerologyPanels;