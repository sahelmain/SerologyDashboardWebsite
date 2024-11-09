import React, { useState } from 'react';
import NavBar from "../../components/NavBar";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const EditCH50: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [selectedPanel, setSelectedPanel] = useState<string | null>(null);

  const handlePanelClick = (panel: string) => {
    if (panel === 'CH50 Level I') {
      navigate('/faculty/ch50-level1');
    } else if (panel === 'CH50 Level II') {
      navigate('/faculty/ch50-level2');
    }
    setSelectedPanel(panel === selectedPanel ? null : panel);
  };

  return (
    <>
      <NavBar name="Edit CH50 QC" />
      <div className="flex flex-col items-center" style={{ minWidth: "100svw", minHeight: "90svh" }}>
        <div className="grid grid-cols-2 gap-8 mt-8">
          {/* CH50 Level I Button */}
          <button
            onClick={() => handlePanelClick('CH50 Level I')}
            className={`!rounded-lg sm:w-80 sm:h-36 !border-[1px] !border-solid transition ease-in-out p-6
              ${selectedPanel === 'CH50 Level I'
                ? `!bg-[#8faadc] !border-[#2F528F] !border-[4px]`
                : `!bg-[${theme.secondaryColor}] !border-[#47669C] hover:!bg-[#8faadc] hover:!border-[#2F528F] hover:!border-[4px]`
              }`}
          >
            <div className="button-text font-bold text-2xl">CH50 Level I</div>
          </button>

          {/* CH50 Level II Button */}
          <button
            onClick={() => handlePanelClick('CH50 Level II')}
            className={`!rounded-lg sm:w-80 sm:h-36 !border-[1px] !border-solid transition ease-in-out p-6
              ${selectedPanel === 'CH50 Level II'
                ? `!bg-[#8faadc] !border-[#2F528F] !border-[4px]`
                : `!bg-[${theme.secondaryColor}] !border-[#47669C] hover:!bg-[#8faadc] hover:!border-[#2F528F] hover:!border-[4px]`
              }`}
          >
            <div className="button-text font-bold text-2xl">CH50 Level II</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default EditCH50; 