import React from "react";

interface IButton {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const PrimaryButton = ({ title, href, icon }: IButton) => {
  return (
    <a href={href}>
      <button className="flex gap-3 px-6 rounded-sm w-full font-medium hover:bg-gray-200 py-3 ">
        {icon}
        {title}
      </button>
    </a>
  );
};

export default PrimaryButton;
