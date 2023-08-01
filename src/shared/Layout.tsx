import React from "react";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactElement | null;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <StyledHeader>~ 투두리스트 ~</StyledHeader>
      {children}
    </StyledLayout>
  );
};

const StyledHeader = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 0 0 10px 10px;
  background-color: #5395ff;
  color: #ffffff;
`;

const StyledLayout = styled.div`
  margin: 0px auto;
  max-width: 1200px;
  min-width: 800px;
  font-family: "Noto Sans KR", sans-serif;
`;

export default Layout;
