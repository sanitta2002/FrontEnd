import type { NavItemId } from "@/data/navItems";

export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export interface InputProps {
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  error?: string;
  registration?: React.InputHTMLAttributes<HTMLInputElement>;
}


export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export interface FoodCardProps {
  food: FoodItem;
}


export interface BottomNavigationProps {
  activeTab: NavItemId;
  onTabChange: (id: NavItemId) => void;
}