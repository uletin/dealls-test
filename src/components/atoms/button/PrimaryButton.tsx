import Link from "next/link";
import React from "react";

interface IButton {
  title: string;
  href: string;
  icon: React.ReactNode;
  focus: boolean;
}

const PrimaryButton = ({ title, href, icon, focus }: IButton) => {
  return (
    <Link href={href}>
      <button className="flex gap-3 px-6 rounded-sm w-full font-medium hover:bg-gray-200 py-3" style={{backgroundColor: focus ? "#dee2e6" : "transparent"}}>
        {icon}
        {title}
      </button>
    </Link>
  );
};

export default PrimaryButton;
