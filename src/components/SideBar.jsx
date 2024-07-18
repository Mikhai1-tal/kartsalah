import React, { useState } from 'react';
import { AiOutlineFileDone } from 'react-icons/ai';
import { RiContactsBookFill } from 'react-icons/ri';
import { CiLinkedin } from 'react-icons/ci';
import { FaBloggerB } from 'react-icons/fa';
import { BiCollapse, BiMenu } from 'react-icons/bi';
import { TiDocumentText } from "react-icons/ti";
import sk from '../assets/logo.svg';
import { MdOutlineShowChart, MdOutlineQuestionAnswer } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const SideBar = ({ isExpanded, setIsExpanded }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClassName = (...paths) => {
    return paths.includes(location.pathname)
      ? 'text-white bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-lg'
      : 'text-black';
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-screen z-40 transition-all duration-300 ease-in-out
          ${isExpanded ? 'w-[350px]' : 'w-[100px]'} bg-white hidden lg:flex flex-col`}
      >
        <div className="mt-12 px-4 lg:px-6 h-24 flex items-center justify-center">
          <img
            src={sk}
            alt="SalahKart"
            className={`${isExpanded ? 'w-1/2' : 'w-10'} h-auto text-center mx-auto`}
          />
        </div>
        <hr className="h-px my-3 mx-4 lg:mx-6 bg-gray-200 border-0" />
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center text-black py-2 px-4 w-full"
        >
          {isExpanded ? (
            <div className='flex justify-center items-center'><BiCollapse className="h-8 w-8" /> Dashboard</div>
          ) : (
            <BiMenu className="h-8 w-8" />
          )}
        </button>
        <div className="flex flex-col h-full">
          <div className="flex flex-col gap-4 px-4 lg:px-6 mt-6">
            <Link
              to="/checkscore"
              className={`flex gap-4 items-center py-2 px-4 w-full ${getLinkClassName('/checkscore', '/resumeupload', '/resumeverification')} h-12`}
            >
              <AiOutlineFileDone className="h-8 w-8" />
              {isExpanded && <span className="text-lg lg:text-xl">Resume Score Check</span>}
            </Link>
            <Link
              to="/analyzeresume"
              className={`flex gap-4 items-center py-2 px-4 w-full ${getLinkClassName('/analyzeresume')} h-12`}
            >
              <MdOutlineShowChart className="h-8 w-8" />
              {isExpanded && <span className="text-lg lg:text-xl">Resume Analysis</span>}
            </Link>
            <Link
              to="/buildresume"
              className={`flex gap-4 items-center py-2 px-4 w-full ${getLinkClassName('/buildresume',"/buildresumepage2", "/buildresumepage3", "/buildresumepage4")} h-12`}
            >
              <RiContactsBookFill className="h-8 w-8" />
              {isExpanded && <span className="text-lg lg:text-xl">Build Your Resume</span>}
            </Link>
            <Link
              to="/linkedin"
              className={`flex gap-4 items-center py-2 px-4 w-full ${getLinkClassName('/linkedin')} h-12`}
            >
              <CiLinkedin className="h-8 w-8" />
              {isExpanded && <span className="text-lg lg:text-xl">Optimize LinkedIn</span>}
            </Link>
            <Link
              to="/ourblogs"
              className={`flex gap-4 items-center py-2 px-4 w-full ${getLinkClassName('/ourblogs')} h-12`}
            >
              <FaBloggerB className="h-8 w-8" />
              {isExpanded && <span className="text-lg lg:text-xl">Our Blogs</span>}
            </Link>
          </div>
          <div className="flex flex-col px-4 lg:px-6 gap-4 mt-auto mb-4">
            <Link
              to="/coverletter"
              className={`flex gap-4 items-center py-2 px-4 w-full ${getLinkClassName('/coverletter','/maincontent')} h-12`}
            >
              <TiDocumentText className="h-8 w-8" />
              {isExpanded && <span className="text-lg lg:text-xl">Cover Letter Generation</span>}
            </Link>
            <Link
              to="/interviewquestions"
              className={`flex gap-4 items-center py-2 px-4 w-full ${getLinkClassName('/interviewquestions','/technicalquestions', '/behaviouralquestions')} h-12`}
            >
              <MdOutlineQuestionAnswer className="h-8 w-8" />
              {isExpanded && <span className="text-lg lg:text-xl">Interview Questions</span>}
            </Link>
            
          </div>
        </div>
      </div>
      <div className="lg:hidden fixed top-0 left-0 w-full flex justify-between items-center bg-white z-40 p-4">
        <button onClick={handleMobileMenuToggle}>
          <BiMenu className="h-8 w-8" />
        </button>
        <img src={sk} alt="SalahKart" className="h-8 w-auto" />
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="w-[300px] bg-white h-full p-4 flex flex-col">
            <button onClick={handleMobileMenuToggle} className="mb-4">
              <BiCollapse className="h-8 w-8" />
            </button>
            <div className="flex flex-col gap-4">
              <Link
                to="/checkscore"
                className={`flex gap-4 items-center py-2 px-4 w-full ${getLinkClassName('/checkscore', '/resumeupload', '/resumeverification')} h-12`}
              >
                <AiOutlineFileDone className="h-8 w-8" />
                <span className="text-lg lg:text-xl">Resume Score Check</span>
              </Link>
              <Link
                to="/analyzeresume"
                className={`flex gap-4 items-center py-2 px-4 w-full ${getLinkClassName('/analyzeresume')} h-12`}
              >
                <MdOutlineShowChart className="h-8 w-8" />
                <span className="text-lg lg:text-xl">Resume Analysis</span>
              </Link>
              <Link
                to="/buildresume"
                className={`flex gap-4 items-center py-2 px-4 w-full ${getLinkClassName('/buildresume',"/buildresumepage2" , "/buildresumepage3", "/buildresumepage4")} h-12`}
              >
                <RiContactsBookFill className="h-8 w-8" />
                <span className="text-lg lg:text-xl">Build Your Resume</span>
              </Link>
              <Link
                to="/linkedin"
                className={`flex gap-4 items-center py-2 px-4 w-full ${getLinkClassName('/linkedin')} h-12`}
              >
                <CiLinkedin className="h-8 w-8" />
                <span className="text-lg lg:text-xl">Optimize LinkedIn</span>
              </Link>
              <Link
                to="/ourblogs"
                className={`flex gap-4 items-center py-2 px-4 w-full ${getLinkClassName('/ourblogs')} h-12`}
              >
                <FaBloggerB className="h-8 w-8" />
                <span className="text-lg lg:text-xl">Our Blogs</span>
              </Link>
            </div>
            <div className="flex flex-col gap-4 mt-auto">
              <Link
                to="/coverletter"
                className={`flex gap-4 items-center py-2 px-4 w-full ${getLinkClassName('/coverletter','/maincontent')} h-12`}
              >
                <TiDocumentText className="h-8 w-8" />
                <span className="text-lg lg:text-xl">Cover Letter</span>
              </Link>
              <Link
                to="/interviewquestions"
                className={`flex gap-4 items-center py-2 px-4 w-full ${getLinkClassName('/interviewquestions', '/technicalquestions', '/behaviouralquestions')} h-12`}
              >
                <MdOutlineQuestionAnswer className="h-8 w-8" />
                <span className="text-lg lg:text-xl">Interview Questions</span>
              </Link>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
