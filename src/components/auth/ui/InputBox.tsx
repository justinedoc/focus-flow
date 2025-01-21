import React from "react";

export function InputBox({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-2 relative overflow-hidden transition-[height] duration-500">
      {children}
    </section>
  );
}
