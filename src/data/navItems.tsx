import { Store, Menu, User, MoreHorizontal } from "lucide-react";

export const navItems = [
  { id: "outlet", label: "Outlet", Icon: Store },
  { id: "menu", label: "Menu", Icon: Menu },
  { id: "account", label: "Account", Icon: User },
  { id: "more", label: "More", Icon: MoreHorizontal },
] as const;

export type NavItemId = (typeof navItems)[number]["id"];
