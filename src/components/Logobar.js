import React from "react";
import logo from "../images/logo.jpg";

const Logobar = () => {
  return (
    <>
      <div className="w-[100%] p-[10px] sticky top-0 z-10 flex m-auto bg-white">
        <img className="h-[60px] text-left" src={logo} alt="almabetter" />
      </div>
    </>
  );
};

export default Logobar;
