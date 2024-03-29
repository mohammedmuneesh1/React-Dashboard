import React, { useState } from "react";
import "../App.css"
import {
  FaBars,
  FaCommentAlt,
  FaRegChartBar,
  FaShoppingBag,
  FaTh,
  FaThList,
  FaUserAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
export const Sidebar = ({ children }) => {
  const[isOpen,setIsOpen]= useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  const menuItem = [
    { path: "/", name: "dashboard", icon: <FaTh /> },
    { path: "/about", name: "About", icon: <FaUserAlt /> },
    { path: "/analytics", name: "Analytics", icon: <FaRegChartBar /> },
    { path: "/comment", name: "Comment", icon: <FaCommentAlt /> },
    { path: "/product", name: "Product", icon: <FaShoppingBag /> },
    { path: "/productList", name: "Product List", icon: <FaThList /> },
  ];
  return (
    <div className="container">
      <div style={{width:isOpen?"250px":"50px"}} className="sidebar">
        {/*text + logo  start */}
        <div className="top_section">
          <h1 style={{display:isOpen?"block":"none"}} className="logo">Logo</h1>
          <div style={{marginLeft:isOpen?"140px":"0px"}} className="bars">
            <FaBars onClick={toggle}/>
          </div>
        </div>
        {/*text + logo  end */}

        {/*mapping the item start */}
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active" 
          >
             {/* if we click one link it is active link, */}
            <div className="icon">{item.icon}</div>
            <div style={{display:isOpen?"block":"none"}} className="link_text">{item.name}</div>
          </NavLink>
        ))}
        {/*mapping the item end */}
      </div>
      <main>{children}</main>
    </div>
  );
};
