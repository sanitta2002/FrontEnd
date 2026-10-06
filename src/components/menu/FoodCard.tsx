import { Plus, ArrowRight } from "lucide-react";
import type { FoodCardProps } from "@/types";

const FoodCard = ({ food }: FoodCardProps) => {
  return (
    <article
      id={`food-card-${food.id}`}
      className="group animate-enter flex flex-col overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    >

      <div className="relative w-full overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        <button
          type="button"
          id={`add-btn-${food.id}`}
          aria-label={`Add ${food.name} to cart`}
          className="absolute bottom-2.5 right-2.5 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-black/40 transition-all duration-200 active:bg-black/60 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100"
        >
          <Plus size={20} strokeWidth={2.5} className="text-white" />
        </button>
      </div>

      <div className="flex flex-col items-center px-2 py-3 pb-2 h-14 justify-center">
        <h3 className="text-center text-[13px] font-semibold leading-tight text-gray-900 line-clamp-2 group-hover:text-hl-red transition-colors duration-200">
          {food.name}
        </h3>
      </div>

      <div className="relative flex items-center justify-center bg-[#FFF5F5] py-2.5 px-3 group-hover:bg-hl-red/10 transition-colors duration-200">
        <span className="text-[15px] font-bold text-hl-red">
          {food.price}
        </span>
        <button
          type="button"
          id={`order-btn-${food.id}`}
          aria-label={`Order ${food.name}`}
          className="absolute right-3 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <ArrowRight size={18} strokeWidth={2} className="text-hl-red" />
        </button>
      </div>
    </article>
  );
};

export default FoodCard;