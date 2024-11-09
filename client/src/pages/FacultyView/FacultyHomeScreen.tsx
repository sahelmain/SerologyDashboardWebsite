import React from "react";
import { ButtonBase } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import NavBar from "../../components/NavBar";
import { useAuth } from "../../context/AuthContext";

const FacultyHomeScreen = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { isAuthenticated } = useAuth();

  const buttonStyle = `rounded-lg w-80 h-36 bg-[#E9EBF5] border border-solid border-[#47669C] transition-all hover:bg-[#8faadc] hover:border-[#2F528F] hover:border-4 p-6`;

  return (
    <>
      <NavBar name="MIS Home Screen" />
      <div className="bg-white flex flex-wrap justify-center gap-6 px-24 py-12 max-w-[1460px] mx-auto min-h-[90vh]">
        <ButtonBase 
          className={buttonStyle}
          onClick={() => navigate("/faculty/qc")}
        >
          <div className="font-bold text-2xl">Quality Controls</div>
        </ButtonBase>

        <ButtonBase className={buttonStyle}>
          <div className="font-bold text-2xl">Results in Progress</div>
        </ButtonBase>

        <ButtonBase className={buttonStyle}>
          <div className="font-bold text-2xl">Completed Results</div>
        </ButtonBase>

        <ButtonBase className={buttonStyle}>
          <div className="font-bold text-2xl">Worksheets</div>
        </ButtonBase>

        <ButtonBase className={buttonStyle}>
          <div className="font-bold text-2xl">Quizzes</div>
        </ButtonBase>

        <ButtonBase className={buttonStyle}>
          <div className="font-bold text-2xl">Case Studies</div>
        </ButtonBase>

        <ButtonBase className={buttonStyle}>
          <div className="font-bold text-2xl">Student Report Submissions</div>
        </ButtonBase>

        <ButtonBase className={buttonStyle}>
          <div className="font-bold text-2xl">Reference Files</div>
        </ButtonBase>

        <ButtonBase className={buttonStyle}>
          <div className="font-bold text-2xl">Student Roster</div>
        </ButtonBase>
      </div>
    </>
  );
};

export default FacultyHomeScreen;