import { RiMenu3Fill } from "react-icons/ri";
import { navItems } from "../constants/NavItems";
import Button from "./Button";
import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleOutClick(e: MouseEvent) {
      const target = e.target as Element;
      if (!navRef.current?.contains(target) || target.closest("a")) {
        setIsNavOpen(false);
      }
    }

    document.addEventListener("click", handleOutClick, true);
    return () => document.removeEventListener("click", handleOutClick, true);
  }, []);

  return (
    <nav
      ref={navRef}
      className="flex justify-between items-center w-full bg-black text-white md:px-10 px-5 md:py-5 py-4 md:relative fixed top-0 left-0 z-50"
    >
      {/* Logo */}
      <Logo withName />

      {/* Navigation Links */}
      <div
        className={`flex gap-10 md:relative fixed top-0 right-0 bg-black md:flex-row flex-col min-w-[17rem] md:w-auto justify-between md:p-0 p-10 rounded-l-xl md:rounded-none md:border-0 border border-white/20 transition-transform duration-500 ease-in-out md:translate-x-0 ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Links List */}
        <ul className="flex md:flex-row flex-col relative">
          {navItems.map((nav) => (
            <li key={nav.name} className="py-2 px-4">
              <a
                href={"#" + nav.name.toLowerCase()}
                className="hover:text-gray-400 transition"
              >
                {nav.name}
              </a>
            </li>
          ))}

          {/* Close Button */}
          <FaXmark
            size={20}
            className="absolute -top-5 -right-5 cursor-pointer md:hidden"
            aria-label="Close navigation menu"
            onClick={() => setIsNavOpen(false)}
          />
        </ul>

        {/* Auth Buttons */}
        <aside className="flex gap-5 md:flex-row flex-col mt-5 md:mt-0">
          <Link to="/signup">
            <Button>Signup</Button>
          </Link>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </aside>
      </div>

      {/* Hamburger Menu */}
      <RiMenu3Fill
        size={24}
        className="block md:hidden cursor-pointer"
        aria-label="Open navigation menu"
        onClick={() => setIsNavOpen(true)}
      />
    </nav>
  );
}

export default Navbar;
