import { navItems} from "@/data/navItems";
import type { BottomNavigationProps } from "@/types";


const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  return (
    <nav
      id="bottom-navigation"
      className="fixed bottom-0 left-0 z-[100] flex w-full items-center justify-around border-t border-gray-100 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)] md:hidden h-[60px]"
    >
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            id={`nav-${item.id}`}
            type="button"
            onClick={() => onTabChange(item.id)}
            aria-label={item.label}
            className={`relative flex h-full flex-col items-center justify-center gap-1 bg-transparent px-4 transition-transform active:scale-95 ${
              isActive ? "border-b-[3px] border-hl-red" : "border-b-[3px] border-transparent"
            }`}
          >
            <item.Icon 
              size={22} 
              color={isActive ? "#e8192c" : "#888888"} 
              strokeWidth={isActive ? 2.5 : 2} 
            />
            <span
              className={`text-[10px] font-medium leading-none tracking-wide transition-colors ${
                isActive ? "text-hl-red" : "text-gray-600"
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavigation;
