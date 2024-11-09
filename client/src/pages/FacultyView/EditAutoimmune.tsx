import React, { useState } from 'react';
import NavBar from "../../components/NavBar";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const EditAutoimmune: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [selectedPanel, setSelectedPanel] = useState<string | null>(null);
  const [showANAOptions, setShowANAOptions] = useState(false);

  const handlePanelClick = (panel: string) => {
    if (panel === 'ANA Panel') {
      setShowANAOptions(!showANAOptions);
    } else if (panel === 'Autoantibody Panel') {
      navigate('/faculty/edit-qc/autoantibody');
    } else if (panel === 'RF Panel') {
      navigate('/faculty/rf-panel');
    }
    setSelectedPanel(panel === selectedPanel ? null : panel);
  };

  const handleANAOptionClick = (option: string) => {
    if (option === 'Qualitative') {
      navigate('/faculty/ana-qualitative');
    } else if (option === 'Levey Jennings') {
      // Add navigation for Levey Jennings when ready
      console.log('Navigating to Levey Jennings...');
    }
  };

  return (
    <>
      <NavBar name="Edit Serology QC" />
      <div className="flex flex-col items-center" style={{ minWidth: "100svw", minHeight: "90svh" }}>
        <div className="grid grid-cols-3 gap-8 mt-8">
          {/* ANA Panel Button */}
          <div className="relative">
            <button
              onClick={() => handlePanelClick('ANA Panel')}
              className={`!rounded-lg sm:w-80 sm:h-36 !border-[1px] !border-solid transition ease-in-out p-6
                ${selectedPanel === 'ANA Panel'
                  ? `!bg-[#8faadc] !border-[#2F528F] !border-[4px]`
                  : `!bg-[${theme.secondaryColor}] !border-[#47669C] hover:!bg-[#8faadc] hover:!border-[#2F528F] hover:!border-[4px]`
                }`}
            >
              <div className="button-text font-bold text-2xl">ANA Panel</div>
            </button>
            
            {/* ANA Options Dropdown */}
            {showANAOptions && (
              <div className="absolute left-0 w-full mt-2 bg-white rounded-lg shadow-lg z-10 border border-[#47669C]">
                <button
                  onClick={() => handleANAOptionClick('Qualitative')}
                  className="w-full px-4 py-2 text-left hover:bg-[#8faadc] rounded-t-lg font-semibold"
                >
                  Qualitative
                </button>
                <button
                  onClick={() => handleANAOptionClick('Levey Jennings')}
                  className="w-full px-4 py-2 text-left hover:bg-[#8faadc] rounded-b-lg font-semibold"
                >
                  Levey Jennings
                </button>
              </div>
            )}
          </div>

          {/* Autoantibody Panel Button */}
          <button
            onClick={() => handlePanelClick('Autoantibody Panel')}
            className={`!rounded-lg sm:w-80 sm:h-36 !border-[1px] !border-solid transition ease-in-out p-6
              ${selectedPanel === 'Autoantibody Panel'
                ? `!bg-[#8faadc] !border-[#2F528F] !border-[4px]`
                : `!bg-[${theme.secondaryColor}] !border-[#47669C] hover:!bg-[#8faadc] hover:!border-[#2F528F] hover:!border-[4px]`
              }`}
          >
            <div className="button-text font-bold text-2xl">Autoantibody Panel</div>
          </button>

          {/* RF Panel Button */}
          <button
            onClick={() => handlePanelClick('RF Panel')}
            className={`!rounded-lg sm:w-80 sm:h-36 !border-[1px] !border-solid transition ease-in-out p-6
              ${selectedPanel === 'RF Panel'
                ? `!bg-[#8faadc] !border-[#2F528F] !border-[4px]`
                : `!bg-[${theme.secondaryColor}] !border-[#47669C] hover:!bg-[#8faadc] hover:!border-[#2F528F] hover:!border-[4px]`
              }`}
          >
            <div className="button-text font-bold text-2xl">RF Panel</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default EditAutoimmune; 