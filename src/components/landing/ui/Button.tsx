import React from "react";

interface ButtonTypes {
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonTypes) {
  return (
    <button
      onClick={onClick}
      className="min-w-24 py-2 px-4 font-medium bg-white rounded-lg border-none text-black"
    >
      {children}
    </button>
  );
}

export default Button;
