import PrimaryButton from "@/components/atoms/button/PrimaryButton";
import { SidebarItems } from "./SidebarItems";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-2/12 h-full py-6 bg-[#F1F2F6]">
      <div className="pb-8">
        <p>Dealls Admin</p>
      </div>

      <div className="flex flex-col px-2">
        {SidebarItems.map((item, index) => (
          <PrimaryButton
            key={index}
            title={item.title}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
