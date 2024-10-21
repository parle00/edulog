import React from "react";
import styled from "styled-components";

interface EdulogInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  valid?: boolean;
  name: string;
}

const StyledInput = styled.input`
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const EdulogInput = ({
  label,
  valid,
  errorMessage,
  name,
  ...props
}: EdulogInputProps) => {
  return (
    <StyledInputWrapper>
      {label && (
        <label style={{ color: valid ? "#FF5722" : "inherit" }} htmlFor={name}>
          {label}
        </label>
      )}
      <div>
        <StyledInput
          {...props}
          style={{ borderColor: valid ? "#FF5722" : "" }}
          name={name}
        />
      </div>
      {errorMessage && valid && (
        <label htmlFor={name} style={{ color: "#FF5722" }}>
          {errorMessage}
        </label>
      )}
    </StyledInputWrapper>
  );
};

export default EdulogInput;
