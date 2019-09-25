import React, { useState } from "react";
import styled from "styled-components";

// import TopNav from "./TopNav";

const StyledTopNav = styled.nav`
 & .nav-links {
   list-style: none;
   li {
    display: inline-block;
    padding: 0px 1.5rem;
    a {
      transition: all 0.3s ease-in-out;
      font-size: 1.3rem;
      text-decoration: none;
      color: #999;
      &::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #000;
        transition: width .2s ease-in-out;
      }
      &:hover {
        color: #000;
      }
      &:hover::after {
        width: 100%;
        transition: width .2s ease-in-out;
      }
    }
   }
 }

`;
const TopNav = () => {
  
  return (
    <StyledTopNav>
      <ul className="nav-links">
        <li><a href="#">WorkSpace</a></li>
        <li><a href="#">PlaySpace</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Membership</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </StyledTopNav>
  );
};

export default TopNav;

