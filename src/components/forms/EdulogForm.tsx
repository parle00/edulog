import React from "react";

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
    <form
      onSubmit={onSubmit}
      noValidate={validateDisabled}
      onKeyDown={onKeyDown}
      autoComplete={autoComplete ? "on" : "off"}
    >
      {children}
    </form>
  );
};

export default EdulogForm;
