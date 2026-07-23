import { BusinessFacts, MenuItem, InstagramPost } from '../types';
import heroDishImage from '../assets/images/grill_hero_dish_1784835251056.jpg';
import ambianceImage from '../assets/images/grill_ambiance_1784835263227.jpg';

export { heroDishImage, ambianceImage };

export const BUSINESS_FACTS: BusinessFacts = {
  name: "Grill to Chill",
  bengaliName: "গ্রিল টু চিল",
  cuisine: "Indian Restaurant",
  rating: 3.9,
  reviewCount: 1856,
  priceRange: "₹200–600 per person",
  address: "45, New, GT Rd, Kotrung, Uttarpara, West Bengal 712258",
  phone: "090076 21222",
  phoneRaw: "tel:09007621222",
  serviceOptions: ["Dine-in", "Takeaway", "No-contact delivery"],
  hoursText: "Open daily until 10:30 PM",
  closingTime: "10:30 PM",
  instagramUrl: "https://www.instagram.com/_grill_to_chill/",
  menuUrl: "https://www.zomato.com/kolkata/grill-to-chill-uttarpara/menu",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Grill+to+Chill+45+New+GT+Rd+Kotrung+Uttarpara+West+Bengal+712258"
};

// Menu Items organized by category and foodType (NO PRICES included as per specification)
export const MENU_ITEMS: MenuItem[] = [
  // --- NON-VEG FOOD (Tandoori & Starters) ---
  {
    id: "nv-1",
    name: "Classic Tandoori Chicken",
    category: "food",
    foodType: "non-veg",
    subCategory: "Tandoori & Starters",
    description: "Bone-in chicken marinated in yogurt, Kashmiri red chili, and fresh spices, flame-roasted in clay oven.",
    tags: ["Signature", "Charcoal Grill"],
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "nv-2",
    name: "Chicken Reshmi Kebab",
    category: "food",
    foodType: "non-veg",
    subCategory: "Tandoori & Starters",
    description: "Melt-in-mouth tender chicken chunks coated in cream, cashew paste, and aromatic green cardamom.",
    tags: ["Must Try"],
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "nv-3",
    name: "Chicken Tikka Kebab",
    category: "food",
    foodType: "non-veg",
    subCategory: "Tandoori & Starters",
    description: "Juicy boneless chicken marinated in spiced hung curd and charred over live charcoal flames.",
    tags: ["Chef Special"],
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "nv-4",
    name: "Mutton Seekh Kebab",
    category: "food",
    foodType: "non-veg",
    subCategory: "Tandoori & Starters",
    description: "Minced mutton infused with fresh herbs, ginger, garlic, and freshly ground spices skewered on charcoal.",
    tags: ["Gourmet Grill"],
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "nv-5",
    name: "Chicken Tangdi Kebab",
    category: "food",
    foodType: "non-veg",
    subCategory: "Tandoori & Starters",
    description: "Plump drumsticks marinated in rich spice blend and slow-roasted for a smoky glaze.",
    tags: ["Popular"]
  },
  {
    id: "nv-6",
    name: "Fish Tikka",
    category: "food",
    foodType: "non-veg",
    subCategory: "Tandoori & Starters",
    description: "Fresh fish fillets seasoned with carom seeds (ajwain), lemon juice, and roasted spice marinade.",
    tags: ["Seafood"]
  },

  // --- NON-VEG FOOD (Main Course) ---
  {
    id: "nv-mc-1",
    name: "Special Butter Chicken",
    category: "food",
    foodType: "non-veg",
    subCategory: "Main Course",
    description: "Tandoori roasted chicken simmered in a velvety tomato, butter, and cashew cream gravy.",
    tags: ["House Favorite"],
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "nv-mc-2",
    name: "Chicken Bharta",
    category: "food",
    foodType: "non-veg",
    subCategory: "Main Course",
    description: "Shredded chicken cooked in a rich, creamy egg-infused gravy with aromatic garam masala.",
    tags: ["Kolkata Style"],
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "nv-mc-3",
    name: "Kadhai Chicken",
    category: "food",
    foodType: "non-veg",
    subCategory: "Main Course",
    description: "Succulent chicken cooked with crushed coriander seeds, capsicum, onions, and spicy kadhai masala.",
    tags: ["Spiced"]
  },
  {
    id: "nv-mc-4",
    name: "Mutton Rogan Josh",
    category: "food",
    foodType: "non-veg",
    subCategory: "Main Course",
    description: "Tender mutton chunks slow-cooked in a traditional aromatic gravy infused with Kashmiri chili and fennel.",
    tags: ["Rich & Classic"]
  },
  {
    id: "nv-mc-5",
    name: "Chicken Do Pyaza",
    category: "food",
    foodType: "non-veg",
    subCategory: "Main Course",
    description: "Chicken braised with caramelized and diced onions in a fragrant whole-spice gravy.",
    tags: ["Traditional"]
  },

  // --- VEG FOOD (Tandoori & Starters) ---
  {
    id: "v-1",
    name: "Paneer Tikka Shashlik",
    category: "food",
    foodType: "veg",
    subCategory: "Tandoori & Starters",
    description: "Cubes of fresh cottage cheese, bell peppers, and onions seasoned with mustard oil and charred to perfection.",
    tags: ["Vegetarian Specialty"],
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "v-2",
    name: "Malai Paneer Kebab",
    category: "food",
    foodType: "veg",
    subCategory: "Tandoori & Starters",
    description: "Silken paneer cubes coated in rich cream, green cardamom, and mild white pepper marinade.",
    tags: ["Creamy & Mild"]
  },
  {
    id: "v-3",
    name: "Tandoori Aloo Stuffed",
    category: "food",
    foodType: "veg",
    subCategory: "Tandoori & Starters",
    description: "Scooped potatoes stuffed with dry fruits, paneer, and crushed spices, flame-roasted in the tandoor.",
    tags: ["Classic"]
  },
  {
    id: "v-4",
    name: "Veg Seekh Kebab",
    category: "food",
    foodType: "veg",
    subCategory: "Tandoori & Starters",
    description: "Finely chopped garden vegetables, sweet corn, and cottage cheese skewered over live charcoal.",
    tags: ["Healthy Grill"]
  },
  {
    id: "v-5",
    name: "Mushroom Tikka",
    category: "food",
    foodType: "veg",
    subCategory: "Tandoori & Starters",
    description: "Button mushrooms marinated in spicy hung curd and clay oven roasted.",
    tags: ["Juicy"]
  },

  // --- VEG FOOD (Main Course) ---
  {
    id: "v-mc-1",
    name: "Paneer Butter Masala",
    category: "food",
    foodType: "veg",
    subCategory: "Main Course",
    description: "Fresh paneer cooked in a rich, buttery, cream-topped tomato gravy.",
    tags: ["Customer Favorite"]
  },
  {
    id: "v-mc-2",
    name: "Dal Makhani",
    category: "food",
    foodType: "veg",
    subCategory: "Main Course",
    description: "Black lentils slow-cooked overnight over clay embers, finished with butter and fresh cream.",
    tags: ["Slow Cooked"],
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "v-mc-3",
    name: "Kadai Paneer",
    category: "food",
    foodType: "veg",
    subCategory: "Main Course",
    description: "Paneer tossed with crunchy bell peppers and fresh ground kadai spices.",
    tags: ["Robust Spice"]
  },
  {
    id: "v-mc-4",
    name: "Mixed Vegetable Korma",
    category: "food",
    foodType: "veg",
    subCategory: "Main Course",
    description: "Assorted seasonal vegetables simmered in a rich cashew-based gravy.",
    tags: ["Mild"]
  },

  // --- BREADS & BIRYANI ---
  {
    id: "br-1",
    name: "Garlic Butter Naan",
    category: "food",
    foodType: "veg",
    subCategory: "Breads & Rice",
    description: "Clay oven leavened bread brushed generously with garlic butter and fresh cilantro.",
    tags: ["Tandoori Bread"]
  },
  {
    id: "br-2",
    name: "Butter Naan / Plain Naan",
    category: "food",
    foodType: "veg",
    subCategory: "Breads & Rice",
    description: "Soft, fluffy tandoori naan baked against hot clay walls.",
    tags: ["Tandoori Bread"]
  },
  {
    id: "br-3",
    name: "Laccha Paratha",
    category: "food",
    foodType: "veg",
    subCategory: "Breads & Rice",
    description: "Multi-layered flaky whole wheat bread baked in tandoor.",
    tags: ["Flaky"]
  },
  {
    id: "br-4",
    name: "Special Chicken Dum Biryani",
    category: "food",
    foodType: "non-veg",
    subCategory: "Breads & Rice",
    description: "Long grain Basmati rice layered with marinated chicken, boiled egg, potato, saffron, and ghee, cooked on Dum.",
    tags: ["Signature Biryani"],
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "br-5",
    name: "Mutton Dum Biryani",
    category: "food",
    foodType: "non-veg",
    subCategory: "Breads & Rice",
    description: "Aromatic Basmati rice slow-cooked with tender mutton pieces, Kolkata-style potato, and secret whole spices.",
    tags: ["Royal Feast"]
  },
  {
    id: "br-6",
    name: "Veg Dum Biryani",
    category: "food",
    foodType: "veg",
    subCategory: "Breads & Rice",
    description: "Fragrant rice layered with fresh garden vegetables, paneer cubes, and aromatic saffron.",
    tags: ["Aromatic Veg"]
  },

  // --- BEVERAGES ---
  {
    id: "bev-1",
    name: "Chilled Mint Mojito",
    category: "beverages",
    subCategory: "Mocktails & Coolers",
    description: "Refreshing crushed mint leaves, fresh lime juice, and sparkling soda served over crushed ice.",
    tags: ["Refreshing Chill"]
  },
  {
    id: "bev-2",
    name: "Sweet Kulhad Lassi",
    category: "beverages",
    subCategory: "Traditional Drinks",
    description: "Thick creamy yogurt drink served in authentic clay kulhad, topped with malai and cardamom.",
    tags: ["Cooling Classic"]
  },
  {
    id: "bev-3",
    name: "Fresh Lime Soda / Water",
    category: "beverages",
    subCategory: "Mocktails & Coolers",
    description: "Zesty lemon drink customizable with sweet, salted, or mixed flavors.",
    tags: ["Thirst Quencher"]
  },
  {
    id: "bev-4",
    name: "Cold Coffee with Ice Cream",
    category: "beverages",
    subCategory: "Shakes & Coffees",
    description: "Rich espresso blended with chilled milk, topped with a velvety scoop of vanilla ice cream.",
    tags: ["Creamy Chill"]
  },
  {
    id: "bev-5",
    name: "Masala Kulhad Chai",
    category: "beverages",
    subCategory: "Traditional Drinks",
    description: "Steaming aromatic tea infused with ginger, cardamom, and clove, served in earthen clay cups.",
    tags: ["Earthy Flavor"]
  },
  {
    id: "bev-6",
    name: "Chocolate Thick Shake",
    category: "beverages",
    subCategory: "Shakes & Coffees",
    description: "Decadent dark chocolate shake topped with chocolate drizzle.",
    tags: ["Dessert Shake"]
  }
];

// Instagram feed mockup cards linked to real handle https://www.instagram.com/_grill_to_chill/
export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    imageUrl: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop",
    caption: "Flame-kissed perfection hot off the charcoal tandoor! Tag your kebab partner 🍗🔥 #GrillToChill #UttarparaEats",
    likes: 342,
    comments: 28,
    link: "https://www.instagram.com/_grill_to_chill/",
    date: "2 DAYS AGO"
  },
  {
    id: "ig-2",
    imageUrl: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop",
    caption: "Melt-in-mouth Paneer Tikka drizzled with fresh mint chutney. The ultimate weekend starter! 🧀✨ #PaneerTikka #IndianFood",
    likes: 289,
    comments: 19,
    link: "https://www.instagram.com/_grill_to_chill/",
    date: "4 DAYS AGO"
  },
  {
    id: "ig-3",
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
    caption: "Slow-cooked Kolkata style Chicken Dum Biryani with the aroma of pure ghee & saffron. 🍛 #BiryaniLovers #Kotrung",
    likes: 512,
    comments: 42,
    link: "https://www.instagram.com/_grill_to_chill/",
    date: "1 WEEK AGO"
  },
  {
    id: "ig-4",
    imageUrl: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=800&auto=format&fit=crop",
    caption: "Creamy Butter Chicken & piping hot Garlic Naan — comfort food done right at GT Road. 🤤 #ButterChicken",
    likes: 418,
    comments: 31,
    link: "https://www.instagram.com/_grill_to_chill/",
    date: "1 WEEK AGO"
  }
];
