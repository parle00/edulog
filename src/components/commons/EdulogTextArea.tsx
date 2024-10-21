import React from "react";
import styled from "styled-components";

interface EdulogInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string;
  valid?: boolean;
  name: string;
}

const StyledTextArea = styled.textarea`
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

const StyledTextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const EdulogTextArea = ({
  label,
  valid,
  errorMessage,
  name,
  ...props
}: EdulogInputProps) => {
  return (
    <StyledTextAreaWrapper>
      {label && (
        <label style={{ color: valid ? "#FF5722" : "inherit" }} htmlFor={name}>
          {label}
        </label>
      )}
      <div>
        <StyledTextArea
          rows={5}
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
    </StyledTextAreaWrapper>
  );
};

export default EdulogTextArea;
