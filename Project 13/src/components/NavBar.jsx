import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import logo from "../../public/logo.png";
import profile from "../../public/profile.jpg";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import Avatar from "react-avatar";

function NavBar() {
  return (
    <div className="flex justify-between px-6 py-2 border fixed top-0 w-[100%] bg-white">
      <div className="flex items-center space-x-4">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img src={logo} alt="" className="w-28 cursor-pointer" />
      </div>
      <div className="flex items-center w-[35%]">
        <div className="w-[100%] px-3 py-2 rounded-l-full border">
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
        <button className="px-4 py-2 border rounded-r-full bg-gray-100">
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className=" flex items-center space-x-5">
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <Avatar src={profile} size="32" round={true} />
      </div>
    </div>
  );
}

export default NavBar;
