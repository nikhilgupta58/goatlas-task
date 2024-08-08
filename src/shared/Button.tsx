import React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: IProps) {
  return (
    <button {...props} className={`hover:brightness-110 hover:transition-all ${props?.className}`}>
      {children}
    </button>
  );
}
