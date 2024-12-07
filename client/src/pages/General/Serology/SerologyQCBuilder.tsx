import React, { useEffect } from 'react';
import { ButtonBase } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from '../../../components/NavBar';
import { useAuth } from '../../../context/AuthContext';
import { useTheme } from '../../../context/ThemeContext';

const SerologyQCBuilder = () => {
  const navigate = useNavigate();
  const { checkSession, checkUserType } = useAuth();
  const { theme } = useTheme();

  useEffect(() => {
    if (!checkSession() || checkUserType() === 'Student') navigate("/unauthorized");
  }, [checkSession, checkUserType, navigate]);

  return (
    <>
      <NavBar name={`Serology QC Builder`} />
      <div className="flex items-center justify-center gap-48" style={{ minWidth: "100svw", minHeight: "90svh" }}>
        <Link to={`/serology/edit_qc`}>
          <ButtonBase className={`!rounded-lg sm:w-80 sm:h-36 !bg-[${theme.secondaryColor}] !border-[1px] !border-solid !border-[${theme.primaryBorderColor}] transition ease-in-out hover:!bg-[${theme.primaryHoverColor}] hover:!border-[#2F528F] hover:!border-[4px] !px-3`}>
            <div className="button-text font-bold text-2xl">QC Panels</div>
          </ButtonBase>
        </Link>
        <Link to={`/serology/qc_types`}>
          <ButtonBase className={`!rounded-lg sm:w-80 sm:h-36 !bg-[${theme.secondaryColor}] !border-[1px] !border-solid !border-[${theme.primaryBorderColor}] transition ease-in-out hover:!bg-[${theme.primaryHoverColor}] hover:!border-[#2F528F] hover:!border-[4px] !px-3`}>
            <div className="button-text font-bold text-2xl">Custom QC Panels</div>
          </ButtonBase>
        </Link>
        <Link to={`/serology/custom_tests`}>
          <ButtonBase className={`!rounded-lg sm:w-80 sm:h-36 !bg-[${theme.secondaryColor}] !border-[1px] !border-solid !border-[${theme.primaryBorderColor}] transition ease-in-out hover:!bg-[${theme.primaryHoverColor}] hover:!border-[#2F528F] hover:!border-[4px] !px-3`}>
            <div className="button-text font-bold text-2xl">Custom Tests</div>
          </ButtonBase>
        </Link>
      </div>
    </>
  );
};

export default SerologyQCBuilder;