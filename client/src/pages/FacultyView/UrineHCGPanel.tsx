import React, { useState } from 'react';
import NavBar from "../../components/NavBar";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const UrineHCGPanel: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [selectedPanel, setSelectedPanel] = useState<string | null>(null);

  const handlePanelClick = (panelName: string) => {
    if (panelName === 'Urine hCG Negative') {
      navigate('/faculty/urine-hcg-negative');
    } else if (panelName === 'Urine hCG Positive') {
      navigate('/faculty/urine-hcg-positive');
    }
    setSelectedPanel(panelName === selectedPanel ? null : panelName);
  };

  return (
    <>
      <NavBar name="Urine hCG Panel" />
      <div className="flex flex-col items-center" style={{ minWidth: "100svw", minHeight: "90svh" }}>
        <div className="grid grid-cols-2 gap-8 mt-8">
          {/* Urine hCG Negative Button */}
          <button
            onClick={() => handlePanelClick('Urine hCG Negative')}
            className={`!rounded-lg sm:w-80 sm:h-36 !border-[1px] !border-solid transition ease-in-out p-6
              ${selectedPanel === 'Urine hCG Negative'
                ? `!bg-[#8faadc] !border-[#2F528F] !border-[4px]`
                : `!bg-[${theme.secondaryColor}] !border-[#47669C] hover:!bg-[#8faadc] hover:!border-[#2F528F] hover:!border-[4px]`
              }`}
          >
            <div className="button-text font-bold text-2xl">Urine hCG Negative</div>
          </button>

          {/* Urine hCG Positive Button */}
          <button
            onClick={() => handlePanelClick('Urine hCG Positive')}
            className={`!rounded-lg sm:w-80 sm:h-36 !border-[1px] !border-solid transition ease-in-out p-6
              ${selectedPanel === 'Urine hCG Positive'
                ? `!bg-[#8faadc] !border-[#2F528F] !border-[4px]`
                : `!bg-[${theme.secondaryColor}] !border-[#47669C] hover:!bg-[#8faadc] hover:!border-[#2F528F] hover:!border-[4px]`
              }`}
          >
            <div className="button-text font-bold text-2xl">Urine hCG Positive</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default UrineHCGPanel; 