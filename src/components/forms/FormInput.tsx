import React from "react";
import { useController } from "react-hook-form";
import EdulogInput from "../commons/EdulogInput";

interface FormInputProps {
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

const FormInput = ({
  name,
  control,
  required,
  rules,
  defaultValue,
  disabled,
  errorMessage,
  label,
  placeholder,
  type,
}: FormInputProps) => {
  const { field, formState } = useController({
    name,
    control,
    rules: { required: required, ...rules },
    defaultValue: defaultValue,
    disabled: disabled,
  });
  return (
    <EdulogInput
      valid={!!formState.errors[name]}
      name={name}
      placeholder={placeholder}
      onChange={field.onChange}
      disabled={disabled}
      type={type}
      label={label}
      errorMessage={errorMessage}
    />
  );
};

export default FormInput;
