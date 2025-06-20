"use-client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinkItem = ({ text, path, classes }) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={path}
        className={`cursor-pointer ${classes} hover:text-[#EB1C24] ${
          pathname === path ? "text-[#EB1C24]" : "text-black"
        }`}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavLinkItem;
