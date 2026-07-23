export type NavPage = 'home' | 'menu' | 'about' | 'visit';

export type CategoryType = 'food' | 'beverages';
export type FoodType = 'veg' | 'non-veg';

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryType;
  foodType?: FoodType; // Veg or Non-Veg for food category
  subCategory: string; // e.g. "Tandoori & Starters", "Main Course", "Breads & Biryani", "Specialty Beverages"
  description?: string;
  tags?: string[];
  isFeatured?: boolean;
  image?: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  link: string;
  date: string;
}

export interface BusinessFacts {
  name: string;
  bengaliName: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  address: string;
  phone: string;
  phoneRaw: string;
  serviceOptions: string[];
  hoursText: string;
  closingTime: string;
  instagramUrl: string;
  menuUrl: string;
  mapsUrl: string;
}
