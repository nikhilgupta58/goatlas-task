import React from "react";

export default function Text({
  children,
  className = "",
  stylearr = [14, 17, 400],
}: {
  children: React.ReactNode;
  className?: string;
  stylearr?: [number, number, number];
}) {
  const fontSize = stylearr[0];
  const lineHeight = stylearr[1];
  const fontWeight = stylearr[2];
  return (
    <p
      style={{
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight}px`,
        fontWeight,
      }}
      className={`${className}`}
    >
      {children}
    </p>
  );
}
