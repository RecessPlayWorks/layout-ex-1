import React, { useState } from "react";
import styled from "styled-components";

import TopNav from "./TopNav";

const StyledHeader = styled.header`
grid-row: 1;
grid-column: 1;
border: 1px solid #222;
border-width: 0px;
border-bottom-width: 1px;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 2rem 2%;
& .text-logo {
  cursor: pointer;
  margin-right: 20px;
  color: #090909;
  font-weight: bold;
  font-family: Trebuchet MS, sans-serif;
  font-size: 2.7rem;
}
.cta-logo {
  margin-left: auto;
}
button {
  padding: 0.5rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: none;
  border-radius: 20px;
  &:hover {
    background-color: green;
  }
}
`;
const Header = () => {
  
  return (
    <StyledHeader>
    <h1 className="text-logo">RecessPlayWorks</h1>
    <TopNav />
    <a className="cta-logo" href="#"><button>LOGO</button></a>
    </StyledHeader>
  );
};

export default Header;
