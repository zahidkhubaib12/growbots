import React from "react";

interface inputTypes {
  value?: string;
  placeholder?: string;
  className?: string;
  style?: object;
  onChange?: () => void;
  onBlur?: () => void;
  required?: boolean;
  type?: string;
  minLength?: number;
  maxLength?: number;
}

const InputTextField = ({
  value = "",
  placeholder = "",
  className = "",
  style = {},
  onChange,
  onBlur,
  required = false,
  type = "",
  minLength,
  maxLength,
}: inputTypes) => {
  return (
    <input
      style={style}
      className={`c-input ${className}`}
      placeholder={placeholder}
      value={value}
      minLength={minLength}
      required={required}
      maxLength={maxLength}
      type={type}
      onBlur={() => {
        onBlur && onBlur();
      }}
      onChange={() => onChange && onChange()}
    />
  );
};

export default InputTextField;
