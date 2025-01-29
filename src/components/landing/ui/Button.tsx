import { cn } from "@/lib/utils";
import React from "react";

interface ButtonTypes {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function Button({ children, onClick, className }: ButtonTypes) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "min-w-24 py-2 px-4 font-medium bg-white rounded-lg border-none text-black __anim-bottom __delay-400",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
