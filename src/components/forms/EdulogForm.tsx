import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

interface EdulogFormProps {
  children?: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
  validateDisabled?: boolean;
  autoComplete?: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLFormElement> | undefined;
}

const EdulogForm = ({
  children,
  onSubmit,
  onKeyDown,
  validateDisabled = true,
  autoComplete = false,
}: EdulogFormProps) => {
  return (
    <StyledForm
      onSubmit={onSubmit}
      noValidate={validateDisabled}
      onKeyDown={onKeyDown}
      autoComplete={autoComplete ? "on" : "off"}
    >
      {children}
    </StyledForm>
  );
};

export default EdulogForm;
