import Link from "next/link";
import { SidebarItems } from "../sidebar/superadmin/SidebarItems";

const MobileNav = () => {
  return (
    <div className="flex justify-between w-full fixed bottom-0 gap-2 p-2 bg-slate-300">
      {SidebarItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <div className="flex flex-col justify-center items-center">
            {item.icon}
            {item.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;
