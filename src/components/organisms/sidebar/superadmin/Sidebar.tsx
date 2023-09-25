import PrimaryButton from "@/components/atoms/button/PrimaryButton";
import { SidebarItems } from "./SidebarItems";
import H1TextField from "@/components/atoms/textField/H1Text";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-2/12 h-full py-6 bg-[#F1F2F6]">
      <div className="pb-6">
        <H1TextField text="Dealls" alignText="center" />
      </div>

      <div className="flex flex-col px-2">
        {SidebarItems.map((item, index) => (
          <PrimaryButton
            key={index}
            title={item.title}
            icon={item.icon}
            href={item.href}
            focus={pathname === item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
