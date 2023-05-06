import { isAsyncThunkAction } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { backendUrl, fronendUrl } from "../../backendUrl";
const NavigationBar = () => {
  const { user, isAuth } = useSelector((state) => state.auth);
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <a to="/" className="logo cursor-pointer text-[25px] text-blue-500">
          {" "}
          Job <strong>Mate</strong>
        </a>
      </div>
      <div className="flex gap-6 menu">
      { isAuth &&
       <Link to={`${fronendUrl}/appliedJobs`}>
          {" "}
          <li className="menulist text-[#6f6f6f] hover:text-blue-500">
           Applied Jobs
          </li>{" "}
        </Link>}
       <Link to="/companies">
          {" "}
          <li className="menulist text-[#6f6f6f] hover:text-blue-500">
            Companies
          </li>
        </Link>
       <Link to="/about">
          {" "}
          <li className="menulist text-[#6f6f6f] hover:text-blue-500">About</li>
        </Link>
       <Link to="/contact">
          {" "}
          <li className="menulist text-[#6f6f6f] hover:text-blue-500">
            Contact
          </li>
        </Link>
        {!isAuth && (
         <Link to={`${fronendUrl}/login`}>
            {" "}
            <li className="menulist text-[#6f6f6f] hover:text-blue-500">
              Login
            </li>
          </Link>
        )}
        {!isAuth && (
         <Link to={`${backendUrl}/register`}>
            {" "}
            <li className="menulist text-[#6f6f6f] hover:text-blue-500">
              Register
            </li>
          </Link>
        )}
        {isAuth && (
         <Link to="/logout">
            {" "}
            <li className="menulist text-[#6f6f6f] hover:text-blue-500">
              Logout
            </li>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
