"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinkProps {
  icon: ReactNode;
  text: string;
  linkUrl: string;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, text, linkUrl }) => {
  const pathName = usePathname();
  const isActive = pathName === linkUrl;
  return (
    <Link href={linkUrl} className={`flex flex-col items-center justify-center transition-all duration-300 ease-out ${isActive ? 'text-indigo-600 font-bold' : 'text-gray-700 hover:text-indigo-600 hover:font-bold'}`}>
      <span className='text-2xl'>{icon}</span>
      <p className='mt-1'>{text}</p>
    </Link>
  )
};

export default NavLink;