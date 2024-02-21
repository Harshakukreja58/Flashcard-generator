import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="m-auto mt-[5px] w-[80%] mb-1  p-[10px]  ">
      <div className="m-auto text-center  relative">
        <h1 className="text-lg font-bold text-left ">Create Flashcard</h1>
        <ul className="flex flex-row space-x-11 my-3 mx-1 text-black font-bold text-text-base  ">
          <li className="navlinks">
            <Link to="/createflashcard">Create New</Link>
          </li>
          <li className="navlinks">
            <Link to="/myflashcard">MyFlashcard</Link>
          </li>
        </ul>
      </div>
      <hr className=" border-1 border-black -my-[13.5px]" />
    </div>
  );
};

export default Navbar;
