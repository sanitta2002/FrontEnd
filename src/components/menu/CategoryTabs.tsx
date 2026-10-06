import { useState } from "react";

const categories = ["For You", "Chicken Chop", "Fish", "Burger"];

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState("Chicken Chop");

  return (
    <div
      id="category-tabs"
      className="scrollbar-hide overflow-x-auto bg-white px-3 pb-3 pt-3 md:px-8 lg:px-12 border-b border-gray-100"
    >
      <div className="flex min-w-max gap-3 px-2">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              id={`cat-tab-${category.toLowerCase().replace(/\s+/g, "-")}`}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-3xl px-5 py-2 text-[13px] font-medium transition-colors active:scale-95 ${
                isActive
                  ? "bg-[#FF3B47] text-white border border-[#FF3B47]"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;