import React from "react";

interface buttonType {
  children?: JSX.Element | string;
  id?: string;
  className?: string;
  style?: object;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  children,
  id,
  className = "",
  style,
  onClick,
  type,
  disabled,
}: buttonType) => {
  return (
    <button
      id={id}
      className={`c-button ${className}`}
      style={style}
      type={type}
      onClick={() => {
        onClick && onClick();
      }}
      data-testid="c-button"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
