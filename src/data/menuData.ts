import type { FoodItem } from "@/types";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";

export const menuData: FoodItem[] = [
  {
    id: 1,
    name: "103 Black Pepper Chicken Chop",
    description: "Grilled chicken chop with rich black pepper sauce and fresh vegetables",
    price: "$6.90",
    image: img1,
    category: "Chicken Chop",
  },
  {
    id: 2,
    name: "Chicken Dum Briyani",
    description: "Aromatic dum-cooked biryani with tender chicken and saffron rice",
    price: "$10.02",
    image: img2,
    category: "Biriyani",
  },
  {
    id: 3,
    name: "Mandi Kozhi Porichu Briyani",
    description: "Traditional Mandi-style whole roasted chicken on fragrant rice",
    price: "$10.05",
    image: img3,
    category: "Biriyani",
  },
  {
    id: 4,
    name: "Chicken Spicy Tikka Masala",
    description: "Spicy chicken tikka in bold masala gravy with aromatic spices",
    price: "$15.40",
    image: img4,
    category: "Biriyani",
  },
];