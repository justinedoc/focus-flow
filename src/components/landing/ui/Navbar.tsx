import { navItems } from "../constants/NavItems";
import Button from "./Button";
import Logo from "./Logo";
function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-black text-white px-10 py-3">
      <Logo withName />

      <div className="flex gap-32">
        <ul className="flex">
          {navItems.map((nav) => (
            <li key={nav.name} className="py-2 px-4">
              <a href={"#" + nav.name.toLowerCase()}>{nav.name}</a>
            </li>
          ))}
        </ul>

        <aside className="flex gap-5 text-black">
          <Button>Sign up</Button>
          <Button>Login</Button>
        </aside>
      </div>
    </nav>
  );
}

export default Navbar;
