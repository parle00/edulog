import React from "react";
import styled from "styled-components";

interface EdulogContainerProps extends React.HTMLAttributes<HTMLElement> {
  children?: any;
}

const StyledContainerWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 20px;
`;

const EdulogContainer = ({ children, ...props }: EdulogContainerProps) => {
  return (
    <StyledContainerWrapper>
      <StyledContainer {...props}>{children}</StyledContainer>
    </StyledContainerWrapper>
  );
};

export default EdulogContainer;
