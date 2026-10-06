import { useState, useCallback } from "react";
import { ShoppingCart } from "lucide-react";
import { UtensilsCrossed } from "lucide-react";
import Header from "@/components/menu/Header";
import Banner from "@/components/menu/Banner";
import CategoryTabs from "@/components/menu/CategoryTabs";
import FoodCard from "@/components/menu/FoodCard";
import BottomNavigation from "@/components/menu/BottomNavigation";
import { menuData } from "@/data/menuData";
import { type NavItemId } from "@/data/navItems";

const Home = () => {
 
  const [activeTab, setActiveTab] = useState<NavItemId>("menu");
  const handleTabChange = useCallback((id: NavItemId) => setActiveTab(id), []);

  return (
    <>
     
      <main
        id="home-page"
        className="relative mx-auto flex min-h-screen w-full flex-col bg-white pb-20 md:pb-0"
      >
        <Header activeTab={activeTab} onTabChange={handleTabChange} />
        <Banner />
        <CategoryTabs />

        <section
          id="food-grid"
          className="grid grid-cols-2 gap-3.5 bg-gray-50 p-4 md:grid-cols-3 md:gap-4 md:p-6 lg:p-8 xl:grid-cols-4"
        >
          {menuData.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400">
              <UtensilsCrossed size={48} strokeWidth={1.2} className="mb-3 opacity-40" />
              <p className="text-sm font-medium">No items available</p>
            </div>
          ) : (
            menuData.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))
          )}
        </section>

    
        <footer id="powered-by-footer" className="bg-gray-50 pt-2 pb-6 text-center">
          <p className="m-0 text-[11px] font-normal text-gray-800">
            Powered By{" "}
            <span className="font-serif text-[13px] font-bold italic tracking-wide text-hl-red">
              Hush Lush
            </span>
          </p>
        </footer>
      </main>

   
      <div className="fixed bottom-[78px] right-4 z-[99] md:bottom-6 md:right-6">
        <button
          id="floating-cart-btn"
          type="button"
          aria-label="View cart"
          className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-black/30 backdrop-blur-sm transition-all duration-200 active:scale-95"
        >
          <ShoppingCart size={20} color="#fff" strokeWidth={2.5} />
        </button>
      </div>



      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </>
  );
};

export default Home;