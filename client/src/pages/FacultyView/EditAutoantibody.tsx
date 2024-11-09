import React, { useState } from 'react';
import NavBar from "../../components/NavBar";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

interface Props {} // Empty interface for props if needed

const EditAutoantibody: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [selectedPanel, setSelectedPanel] = useState<string | null>(null);

  const handlePanelClick = (panel: string) => {
    setSelectedPanel(panel === selectedPanel ? null : panel);
    if (panel === 'Auto-ab Panel Negative') {
      navigate('/faculty/autoantibody-negative');
    } else if (panel === 'Auto-ab Panel Positive') {
      navigate('/faculty/autoantibody-positive');
    }
  };

  return (
    <>
      <NavBar name="Edit Serology QC" />
      <div className="flex flex-col items-center" style={{ minWidth: "100svw", minHeight: "90svh" }}>
        <div className="grid grid-cols-2 gap-8 mt-8">
          {/* Auto-ab Panel Negative Button */}
          <button
            onClick={() => handlePanelClick('Auto-ab Panel Negative')}
            className={`!rounded-lg sm:w-80 sm:h-36 !border-[1px] !border-solid transition ease-in-out p-6
              ${selectedPanel === 'Auto-ab Panel Negative'
                ? `!bg-[#8faadc] !border-[#2F528F] !border-[4px]`
                : `!bg-[${theme.secondaryColor}] !border-[#47669C] hover:!bg-[#8faadc] hover:!border-[#2F528F] hover:!border-[4px]`
              }`}
          >
            <div className="button-text font-bold text-2xl">Auto-ab Panel Negative</div>
          </button>

          {/* Auto-ab Panel Positive Button */}
          <button
            onClick={() => handlePanelClick('Auto-ab Panel Positive')}
            className={`!rounded-lg sm:w-80 sm:h-36 !border-[1px] !border-solid transition ease-in-out p-6
              ${selectedPanel === 'Auto-ab Panel Positive'
                ? `!bg-[#8faadc] !border-[#2F528F] !border-[4px]`
                : `!bg-[${theme.secondaryColor}] !border-[#47669C] hover:!bg-[#8faadc] hover:!border-[#2F528F] hover:!border-[4px]`
              }`}
          >
            <div className="button-text font-bold text-2xl">Auto-ab Panel Positive</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default EditAutoantibody; 