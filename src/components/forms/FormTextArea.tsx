import React from "react";
import { useController } from "react-hook-form";
import EdulogInput from "../commons/EdulogInput";
import EdulogTextArea from "../commons/EdulogTextArea";

interface FormTextAreaProps {
  name: string;
  control: any;
  required?: boolean;
  rules?: any;
  defaultValue?: string;
  disabled?: boolean;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  errorMessage?: string;
  label?: string;
}

const FormTextArea = ({
  name,
  control,
  required,
  rules,
  defaultValue,
  disabled,
  errorMessage,
  label,
  placeholder,
}: FormTextAreaProps) => {
  const { field, formState } = useController({
    name,
    control,
    rules: { required: required, ...rules },
    defaultValue: defaultValue,
    disabled: disabled,
  });
  return (
    <EdulogTextArea
      valid={!!formState.errors[name]}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={field.onChange}
      disabled={disabled}
      label={label}
      errorMessage={errorMessage}
    />
  );
};

export default FormTextArea;
