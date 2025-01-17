import { ReactElement } from "react";
import {
  FaLinkedin,
  FaPinterest,
  FaSquareInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

interface SocialNavsType {
  icon: ReactElement;
  name: string;
  url: string;
}

export const socialNavs: SocialNavsType[] = [
  {
    icon: <FaXTwitter size={24} />,
    name: "Twitter",
    url: "#",
  },
  {
    icon: <FaSquareInstagram size={24} />,
    name: "Instagram",
    url: "#",
  },
  {
    icon: <FaPinterest size={24} />,
    name: "Pinterest",
    url: "#",
  },
  {
    icon: <FaLinkedin size={24} />,
    name: "LinkedIn",
    url: "#",
  },
  {
    icon: <FaYoutube size={24} />,
    name: "YouTube",
    url: "#",
  },
] as const;
