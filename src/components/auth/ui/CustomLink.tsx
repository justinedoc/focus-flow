import { Link } from "react-router";

export function CustomLink({
  children,
  to = "#",
}: {
  children: React.ReactNode;
  to?: string;
}) {
  return (
    <Link to={to} className="text-white px-1 underline bg-[#2b0e5d]/70">
      {children}
    </Link>
  );
}
