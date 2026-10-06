import { Search } from "lucide-react";
import { navItems, type NavItemId } from "@/data/navItems";
import Button from "@/components/common/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@/features/auth/authSlice";
import type { AppDispatch } from "@/store/store";

interface HeaderProps {
  activeTab: NavItemId;
  onTabChange: (id: NavItemId) => void;
}

const Header = ({ activeTab, onTabChange }: HeaderProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          <span className="font-serif text-2xl font-bold italic leading-none tracking-tight text-hl-red">
            HL
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {navItems.filter(item => item.id !== "more").map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`desktop-nav-${item.id}`}
                type="button"
                onClick={() => onTabChange(item.id)}
                className={`flex items-center gap-2 px-1 py-2 text-[15px] font-semibold transition-all duration-200 border-b-[3px] ${
                  isActive
                    ? "text-hl-red border-hl-red"
                    : "text-gray-600 border-transparent hover:text-hl-red hover:border-hl-red/50"
                }`}
              >
                <item.Icon 
                  size={22} 
                  color={isActive ? "#e8192c" : "#888888"} 
                  strokeWidth={isActive ? 2.5 : 2} 
                />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
         
          <button
            type="button"
            id="header-search-btn"
            aria-label="Search menu"
            className="flex h-10 w-10 items-center justify-end transition active:scale-95"
          >
            <Search size={22} className="text-gray-700" strokeWidth={1.5} />
          </button>
          <div className="hidden md:block w-24 ml-2">
            <Button className="!h-10 text-sm" onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;