import React, { useEffect, useState } from "react";
import "./header.css";
import { FaBars, FaUser } from "react-icons/fa";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const [userToggle, setUserToggle] = useState(false);
   const handleUserToggle = () => setUserToggle(!userToggle);
  const { isOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const toggle = () =>
    dispatch({
      type: "setIsOpen",
      payload: !isOpen,
    });


  const handleLogout = () => {
    // localStorage.removeItem("authAdminToken");
    // navigate("/login");
    return <Navigate to="/login" replace={true} />;
  };

  return (
    <>
      <header className="header">
        <div className="header_wrapper">
          <div>
            <div className="bars">
              <FaBars onClick={toggle}/>
            </div>
          </div>
          <div>
            <FaUser onClick={handleUserToggle} className="user_icon" />

            {userToggle && (
              <ul className="user_wrapper">
                <li className="user_list_style">
                  <NavLink to="/password/change">
                    <FaUser className="user_list_icon" /> Change Password
                  </NavLink>
                </li>
                <hr className="hr" />
                <li className="user_list_style">
                  <NavLink to="" onClick={handleLogout}>
                    <BiLogOutCircle className="user_list_icon" /> Log Out
                  </NavLink>
                </li>
              </ul>
            )}

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
