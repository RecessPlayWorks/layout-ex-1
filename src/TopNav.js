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
      &:hover {
        color: #0088fe;
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

