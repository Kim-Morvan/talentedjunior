"use client";

import NavLink from "./header-nav-link";
import {
  SlHome,
  SlPeople,
  SlBriefcase,
  SlBubbles,
  SlBell,
} from "react-icons/sl";
import { Avatar } from "@mui/material";

export const links = [
  { href: "/dashboard", name: "Accueil", icon: <SlHome size={20} /> },
  { href: "/dashboard/groupes", name: "Réseau", icon: <SlPeople size={20} /> },
  {
    href: "/dashboard/jobs",
    name: "Proposition d'emploi",
    icon: <SlBriefcase size={20} />,
  },
  {
    href: "/dashboard/messages",
    name: "Messages",
    icon: <SlBubbles size={20} />,
  },
  {
    href: "/dashboard/notifications",
    name: "Notifications",
    icon: <SlBell size={20} />,
  },
  {
    href: "/dashboard/profile",
    // name: "Profil",
    icon: (
      <Avatar
        alt={`Remy Sharp`}
        src="/static/images/avatar/1.jpg"
        sx={{ width: 34, height: 34 }}
      />
    ),
  },
];

export default function Nav() {
  return (
    <>
      <nav className="hidden md:block lg:block">
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.href} className="text-[#A9A9A9]">
              <NavLink href={link?.href}>
                <div className="flex flex-col items-center space-y-1">
                  <div>{link.icon}</div>
                  <p className="text-xs font-thin">{link.name}</p>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
