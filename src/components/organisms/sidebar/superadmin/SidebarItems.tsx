import {
  IconReplaceFilled,
  IconShoppingCart,
  IconTriangleSquareCircleFilled,
} from "@tabler/icons-react";

export const SidebarItems = [
  {
    title: "Dashboard",
    href: "/superadmin/dashboard",
    icon: <IconReplaceFilled />,
  },
  {
    title: "Products",
    href: "/superadmin/products",
    icon: <IconTriangleSquareCircleFilled />,
  },
  {
    title: "Carts",
    href: "/superadmin/carts",
    icon: <IconShoppingCart />,
  },
];
