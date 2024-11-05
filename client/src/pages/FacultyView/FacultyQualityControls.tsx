import React, { useEffect } from "react";
import DropDown from "../../components/DropDown";
import NavBar from "../../components/NavBar";
import { testTypeLinkList } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// Map dropdown options with specific links for each test type
const OC_options = testTypeLinkList.map(item => ({
  name: item.name, 
  link: item.link + "/order_controls"
}));
const RC_options = testTypeLinkList.map(item => ({
  name: item.name, 
  link: "admin-review_controls"
}));

// For the QC Builder, make sure "Serology" has the correct link
const QB_options = testTypeLinkList.map(item => ({
  name: item.name,
  link: item.name === "Serology" ? "/faculty-qc-builder/serology" : item.link + "/qc_builder"
}));

const FacultyQualityControls = () => {
  const navigate = useNavigate();
  const { checkSession, checkUserType } = useAuth();

  useEffect(() => {
    // Redirect unauthorized users
    if (!checkSession() || checkUserType() === 'Student') navigate("/unauthorized");
  }, []);

  return (
    <>
      <NavBar name="Quality Control" />
      <div
        className="flex items-center justify-center gap-36"
        style={{ minWidth: "100svw", minHeight: "90svh" }}
      >
        <DropDown name="Order Controls" options={OC_options} />
        <DropDown name="Review Controls" options={RC_options} />
        <DropDown name="QC Builder" options={QB_options} />
      </div>
    </>
  );
};

export default FacultyQualityControls;
