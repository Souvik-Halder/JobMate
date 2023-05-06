import { isAsyncThunkAction } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
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
        <a href="/appliedJobs">
          {" "}
          <li className="menulist text-[#6f6f6f] hover:text-blue-500">
           Applied Jobs
          </li>{" "}
        </a>}
        <a href="/companies">
          {" "}
          <li className="menulist text-[#6f6f6f] hover:text-blue-500">
            Companies
          </li>
        </a>
        <a href="/about">
          {" "}
          <li className="menulist text-[#6f6f6f] hover:text-blue-500">About</li>
        </a>
        <a href="/contact">
          {" "}
          <li className="menulist text-[#6f6f6f] hover:text-blue-500">
            Contact
          </li>
        </a>
        {!isAuth && (
          <a href="/login">
            {" "}
            <li className="menulist text-[#6f6f6f] hover:text-blue-500">
              Login
            </li>
          </a>
        )}
        {!isAuth && (
          <a href="/register">
            {" "}
            <li className="menulist text-[#6f6f6f] hover:text-blue-500">
              Register
            </li>
          </a>
        )}
        {isAuth && (
          <a href="/logout">
            {" "}
            <li className="menulist text-[#6f6f6f] hover:text-blue-500">
              Logout
            </li>
          </a>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
