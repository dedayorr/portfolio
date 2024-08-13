import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <div className=" h-[70px] flex justify-between px-[16px] items-center">
      <div className="text-white cursive font-extrabold text-[23px] underline">
        ELIJAH ADEYEYE
      </div>
      <GiHamburgerMenu className="text-textColor h-[30px] w-[30px]" />
    </div>
  );
}

export default Navbar;
