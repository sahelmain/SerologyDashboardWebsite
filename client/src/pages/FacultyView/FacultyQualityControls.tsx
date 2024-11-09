import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import { ButtonBase } from "@mui/material";
import { testTypeLinkList } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useAuth, UserType } from "../../context/AuthContext";

const FacultyQualityControls = () => {
  const navigate = useNavigate();
  const { checkSession, checkUserType } = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const sessionValid = await checkSession();
        const userType = await checkUserType();
        
        if (!sessionValid || userType === UserType.Student) {
          navigate("/unauthorized");
        }
      } catch (error) {
        navigate("/unauthorized");
      }
    };
    
    checkAuth();
  }, [checkSession, checkUserType, navigate]);

  return (
    <>
      <NavBar name="Quality Controls" />
      <div className="flex flex-col items-center" style={{ minHeight: "90svh" }}>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <ButtonBase
            onClick={() => navigate("/faculty/edit-qc/serology")}
            className="rounded-lg w-80 h-36 bg-[#E9EBF5] border border-solid border-[#47669C] transition-all hover:bg-[#8faadc] hover:border-[#2F528F] hover:border-4 p-6"
          >
            <div className="font-bold text-2xl">QC Builder</div>
          </ButtonBase>

          <ButtonBase
            onClick={() => navigate("/faculty/qc-review")}
            className="rounded-lg w-80 h-36 bg-[#E9EBF5] border border-solid border-[#47669C] transition-all hover:bg-[#8faadc] hover:border-[#2F528F] hover:border-4 p-6"
          >
            <div className="font-bold text-2xl">Review Controls</div>
          </ButtonBase>
        </div>
      </div>
    </>
  );
};

export default FacultyQualityControls;
