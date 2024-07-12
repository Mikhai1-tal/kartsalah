import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import avatar from "../assets/Avatar.png";
import AdminSideBar from "../components/AdminDashboard";
import AdminMainContent from "../components/AdminMainComponent";

const Admin = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <AdminSideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div
        className={`flex-1 bg-slate-200 p-2 md:p-4 lg:py-6 lg:px-6 overflow-y-auto transition-all duration-300 lg:ml-[90px]`}
      >
        <div className="lg:pt-1 pt-14 mb-6 md:mb-8 transition-all duration-300">
          <div className="text-sm text-gray-500 font-semibold mt-4 md:mt-5">
            Hello Dhairya,
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div className="flex flex-col lg:flex-row items-start sm:items-center gap-2">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
                Welcome to{" "}
                <span className="bg-gradient-to-br from-[#787ef1] to-[#3710e7] bg-clip-text text-transparent">
                  SalahKart
                </span>{" "}
                <span className="text-base sm:text-xl md:text-2xl mt-1 sm:mt-0 font-medium">
                  {" "}
                  - Job Finding Made Easy!
                </span>
              </div>
            </div>
            <div className="w-full max-w-[350px] h-[40px] flex justify-between items-center px-4 lg:px-0 mt-4 sm:mt-0">
              <IoIosSearch className="h-6 w-6 text-gray-500" />
              <FaBell className="h-6 w-6 text-gray-500" />
              <div className="flex gap-2 bg-blue-900 rounded-full h-9 max-w-[200px] justify-between items-center p-1">
                <div className="relative">
                  <div className="bg-white rounded-full h-7 w-7 flex items-center justify-center">
                    <img
                      src={avatar}
                      alt="avatar"
                      className="rounded-full h-5 w-5"
                    />
                  </div>
                </div>
                <div className="text-white text-sm truncate">Dhairya Gupta</div>
                <IoMdArrowDropdown className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        <AdminMainContent />
      </div>
    </div>
  );
};

export default Admin;
