import React from 'react';
import NavBar from "../../components/NavBar";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const EditSerologyQC: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <>
      <NavBar name="Serology QC Builder" />
      <div
        className="flex items-center justify-center gap-36"
        style={{ minWidth: "100svw", minHeight: "90svh" }}
      >
        {/* Button for Serology QC Panels */}
        <button
          onClick={() => navigate('/faculty/serology-panels')}
          className={`!rounded-lg sm:w-80 sm:h-36 !bg-[${theme.secondaryColor}] !border-[1px] !border-solid !border-[#47669C] transition ease-in-out hover:!bg-[#8faadc] hover:!border-[#2F528F] hover:!border-[4px] p-6`}
        >
          <div className="button-text font-bold text-2xl">Serology QC Panels</div>
        </button>

        {/* Button for Create New Panel */}
        <button
          onClick={() => navigate('/faculty/create-panel')}
          className={`!rounded-lg sm:w-80 sm:h-36 !bg-[${theme.secondaryColor}] !border-[1px] !border-solid !border-[#47669C] transition ease-in-out hover:!bg-[#8faadc] hover:!border-[#2F528F] hover:!border-[4px] p-6`}
        >
          <div className="button-text font-bold text-2xl">Create New Panel</div>
        </button>
      </div>
    </>
  );
};

export default EditSerologyQC;

