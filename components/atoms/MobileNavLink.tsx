"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface MobileNavLinkProps {
  icon: ReactNode;
  text: string;
  linkUrl: string;
  onClick?: () => void;
  className?: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ icon, text, linkUrl, onClick, className }) => {
  return (
    <Link href={linkUrl} onClick={onClick} className={`flex flex-col py-1 items-center border-b-[1px] justify-center transition-all duration-300 ease-out ${className}`}>
      <span className='text-2xl'>{icon}</span>
      <p className='mt-1'>{text}</p>
    </Link>
  )
};

export default MobileNavLink;