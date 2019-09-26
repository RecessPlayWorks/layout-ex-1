import React, { useState } from "react";
import styled from "styled-components";


const StyledMain = styled.main`
grid-row: 2;
grid-column: 1;
// border: 1px solid #222;
// border-width: 0px;
// border-bottom-width: 1px;
// display: flex;
// justify-content: flex-start;
// align-items: center;
// padding: 2rem 2%;
// background: rgba(33,22, 11, 0.5);
`;
const Main = () => {
  
  return (
    <StyledMain>
      <div>Main</div>
    </StyledMain>
  );
};

export default Main;
