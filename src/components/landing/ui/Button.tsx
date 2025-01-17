import React from "react";

interface ButtonTypes {
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonTypes) {
  return (
    <button
      onClick={onClick}
      className="w-24 py-1 font-meduim bg-white rounded-lg border-none"
    >
      {children}
    </button>
  );
}

export default Button;
