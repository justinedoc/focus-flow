import { socialNavs } from "../constants/SocialsNavLinks";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row  gap-3 md:gap-0 items-center md:justify-between bg-black p-6 border-t border-white/20 text-[#808080]">
      <p className="text-sm ">© 2025 FocusFlow, Inc. All rights reserved</p>

      <nav>
        <ul className="flex gap-3">
          {socialNavs.map((socialNav) => (
            <li key={socialNav.name}>
              <a href={socialNav.url}>{socialNav.icon}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
