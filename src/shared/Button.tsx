import React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isDisabled?: boolean;
}

export default function Button({
  isDisabled = false,
  children,
  ...props
}: IProps) {
  return (
    <button
      {...props}
      className={`${
        isDisabled
          ? "cursor-not-allowed brightness-[70%]"
          : "hover:brightness-110 hover:transition-all"
      } ${props?.className}`}
    >
      {children}
    </button>
  );
}
