export function CustomLink({
  children,
  to = "#",
}: {
  children: React.ReactNode;
  to?: string;
}) {
  return (
    <a href={to} className="text-white px-1 underline bg-[#2b0e5d]/70">
      {children}
    </a>
  );
}
