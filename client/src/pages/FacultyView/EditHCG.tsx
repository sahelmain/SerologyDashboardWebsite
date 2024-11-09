import React, { useState } from 'react';
import NavBar from "../../components/NavBar";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const EditHCG: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [selectedPanel, setSelectedPanel] = useState<string | null>(null);

  const handlePanelClick = (panel: string) => {
    if (panel === 'Serum hCG Panel') {
      navigate('/faculty/serum-hcg-panel');
    } else if (panel === 'Urine hCG Panel') {
      navigate('/faculty/urine-hcg-panel');
    }
    setSelectedPanel(panel === selectedPanel ? null : panel);
  };

  return (
    <>
      <NavBar name="Edit hCG QC" />
      <div className="flex flex-col items-center" style={{ minWidth: "100svw", minHeight: "90svh" }}>
        <div className="grid grid-cols-2 gap-8 mt-8">
          {/* Serum hCG Panel Button */}
          <button
            onClick={() => handlePanelClick('Serum hCG Panel')}
            className={`!rounded-lg sm:w-80 sm:h-36 !border-[1px] !border-solid transition ease-in-out p-6
              ${selectedPanel === 'Serum hCG Panel'
                ? `!bg-[#8faadc] !border-[#2F528F] !border-[4px]`
                : `!bg-[${theme.secondaryColor}] !border-[#47669C] hover:!bg-[#8faadc] hover:!border-[#2F528F] hover:!border-[4px]`
              }`}
          >
            <div className="button-text font-bold text-2xl">Serum hCG Panel</div>
          </button>

          {/* Urine hCG Panel Button */}
          <button
            onClick={() => handlePanelClick('Urine hCG Panel')}
            className={`!rounded-lg sm:w-80 sm:h-36 !border-[1px] !border-solid transition ease-in-out p-6
              ${selectedPanel === 'Urine hCG Panel'
                ? `!bg-[#8faadc] !border-[#2F528F] !border-[4px]`
                : `!bg-[${theme.secondaryColor}] !border-[#47669C] hover:!bg-[#8faadc] hover:!border-[#2F528F] hover:!border-[4px]`
              }`}
          >
            <div className="button-text font-bold text-2xl">Urine hCG Panel</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default EditHCG; 