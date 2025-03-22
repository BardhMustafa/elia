export interface Product {
  id: string;
  category: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  imageUrl: string;
}

export const products: Product[] = [
  // Food & Beverage Category
  {
    id: "premium-wines",
    category: "food-beverage",
    title: "Premium Wines",
    description: "Established winemaking tradition with handpicked grapes, producing internationally awarded wines.",
    longDescription: "Our premium wines represent an established winemaking tradition with handpicked grapes from select vineyards. We produce Premium Reserve, Special Selection, and other high-quality wines aged in both oak barrels and stainless-steel tanks. Our wines have received international awards and are currently exported to multiple countries worldwide.",
    features: [
      "Premium Reserve and Special Selection varieties",
      "Aged in oak barrels and stainless-steel tanks",
      "Internationally awarded",
      "Handpicked grapes from select vineyards",
      "Exported to multiple countries"
    ],
    imageUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "organic-food",
    category: "food-beverage",
    title: "Natural & Organic Food Products",
    description: "Promoting healthy eating habits with a range of natural and organic food products.",
    longDescription: "Our natural and organic food products are dedicated to promoting healthy eating habits and lifestyle. We offer a diverse range of products including brown sugar, oat flakes, various seeds (pumpkin, flax, sunflower, quinoa), rice cakes, peanut bars, nuts & fruits, protein bars, and raw snacks. We provide gluten-free and high-protein options, all made with natural ingredients and sustainable food solutions.",
    features: [
      "Brown sugar, oat flakes, and various seeds",
      "Rice cakes, peanut bars, and protein bars",
      "Gluten-free and high-protein options",
      "Natural ingredients and sustainable food solutions",
      "Nuts & fruits and raw snacks"
    ],
    imageUrl: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dairy-products",
    category: "food-beverage",
    title: "Premium Dairy Products",
    description: "High-quality dairy products made from fresh milk using modern technology while maintaining traditional craftsmanship.",
    longDescription: "Our premium dairy products offer a variety of high-quality items made from fresh milk. The product range includes traditional and creamy yogurt varieties, cheeses including feta, mozzarella, and aged cheese, butter, sour cream, and dairy-based spreads, as well as long-life milk and dairy-based beverages. All products are produced using modern technology while maintaining traditional dairy craftsmanship.",
    features: [
      "Traditional and creamy yogurt varieties",
      "Cheeses including feta, mozzarella, and aged cheese",
      "Butter, sour cream, and dairy-based spreads",
      "Long-life milk and dairy-based beverages",
      "Modern technology with traditional craftsmanship"
    ],
    imageUrl: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "confectionery",
    category: "food-beverage",
    title: "Confectionery & Baked Goods",
    description: "Premium quality baked goods and confectionery products with unique flavors and certified processes.",
    longDescription: "We offer premium quality baked goods and confectionery products with a unique range including caramel, honey, cinnamon, and chocolate wafers, as well as mini wafers and special editions. All products are manufactured with IFS and ISO 22000-certified processes and are Halal-certified, making them suitable for diverse markets worldwide.",
    features: [
      "Caramel, honey, cinnamon, and chocolate wafers",
      "Mini wafers and special editions",
      "IFS and ISO 22000-certified processes",
      "Halal-certified for diverse markets",
      "Premium quality ingredients"
    ],
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "energy-beverages",
    category: "food-beverage",
    title: "Functional & Energy Beverages",
    description: "Non-carbonated, sugar-free sports and energy drinks designed for an active lifestyle.",
    longDescription: "Our functional and energy beverages are non-carbonated, sugar-free sports drinks and energy drinks designed for an active lifestyle. Key product lines include collagen-infused drinks for skin hydration and elasticity, BCAA-enhanced formulas for muscle recovery and energy, L-Carnitine variants for metabolism and fat loss support, vitamin-rich blends for immunity and overall wellness, and classic and flavored energy drinks infused with caffeine and vitamins. All beverages are made with high-purity mountain water.",
    features: [
      "Collagen-infused for skin hydration and elasticity",
      "BCAA-enhanced for muscle recovery and energy",
      "L-Carnitine for metabolism and fat loss support",
      "Vitamin-rich blends for immunity and wellness",
      "Made with high-purity mountain water"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "premium-beers",
    category: "food-beverage",
    title: "Premium Beers & Malt Beverages",
    description: "High-quality beers and malt beverages with traditional brewing techniques and pure ingredients.",
    longDescription: "We offer a selection of high-quality beers and malt beverages including lager and premium draft beers with traditional brewing techniques, non-alcoholic malt beverages with natural flavors, craft beers with distinct regional taste profiles, all packaged in bottles, cans, and kegs for various market needs. Our products are produced using pure ingredients and advanced brewing technology.",
    features: [
      "Lager and premium draft beers with traditional brewing",
      "Non-alcoholic malt beverages with natural flavors",
      "Craft beers with distinct regional taste profiles",
      "Packaged in bottles, cans, and kegs",
      "Pure ingredients and advanced brewing technology"
    ],
    imageUrl: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mineral-water",
    category: "food-beverage",
    title: "Premium Natural Mineral Water",
    description: "Naturally sourced mineral water from pristine springs with balanced mineral content.",
    longDescription: "Our premium natural mineral water is sourced from pristine springs, offering high-quality hydration with balanced mineral content. The product range includes still and sparkling mineral water in various packaging sizes, with eco-friendly and sustainable bottling solutions. We export to regional and European markets, providing pure, refreshing hydration options.",
    features: [
      "Naturally sourced from pristine springs",
      "Balanced mineral content for optimal hydration",
      "Still and sparkling varieties available",
      "Various packaging sizes for different needs",
      "Eco-friendly and sustainable bottling solutions"
    ],
    imageUrl: "https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  
  // Home Products Category
  {
    id: "cleaning-products",
    category: "home-products",
    title: "Home & Industrial Cleaning Products",
    description: "High-quality cleaning products for home and industrial use, including eco-friendly solutions.",
    longDescription: "We offer a range of high-quality cleaning products for both home and industrial use. Our product range includes wet wipes for household, baby care, and industrial use, air fresheners and odor neutralizers, dishwasher tablets, laundry detergents, and fabric softeners, glass cleaners, floor cleaners, and multipurpose disinfectants. We also provide eco-friendly and biodegradable cleaning solutions designed for efficient cleaning and hygiene maintenance in various environments.",
    features: [
      "Wet wipes for household, baby care, and industrial use",
      "Air fresheners and odor neutralizers",
      "Dishwasher tablets, laundry detergents, and fabric softeners",
      "Glass cleaners, floor cleaners, and multipurpose disinfectants",
      "Eco-friendly and biodegradable cleaning solutions"
    ],
    imageUrl: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "modern-kitchens",
    category: "home-products",
    title: "Modern Kitchens",
    description: "Custom-designed, high-quality kitchen furniture with premium materials and craftsmanship.",
    longDescription: "Our modern kitchen solutions offer custom-designed, high-quality kitchen furniture with premium materials and craftsmanship for both residential and commercial kitchens. We provide tailored solutions for ergonomic and stylish interiors, committed to sustainability and traditional craftsmanship in every design.",
    features: [
      "Custom-designed kitchen furniture",
      "Premium materials and craftsmanship",
      "Solutions for residential and commercial kitchens",
      "Ergonomic and stylish interior designs",
      "Commitment to sustainability and traditional craftsmanship"
    ],
    imageUrl: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "luxury-stairs",
    category: "home-products",
    title: "Luxury Wood Stairs",
    description: "High-end wooden staircases designed for luxury interiors with premium finishes and craftsmanship.",
    longDescription: "We offer high-end wooden staircases designed for luxury interiors. Our product range includes custom-crafted hardwood staircases with premium finishes, modern and classic designs including floating, spiral, and grand staircases, high-quality wood materials such as oak, walnut, and mahogany, handcrafted details with ornate railings and polished surfaces. Our staircases feature durable and sustainable construction for long-lasting elegance, ideal for residences, hotels, and commercial spaces seeking timeless luxury.",
    features: [
      "Custom-crafted hardwood staircases with premium finishes",
      "Modern and classic designs (floating, spiral, grand)",
      "High-quality wood materials (oak, walnut, mahogany)",
      "Handcrafted details with ornate railings",
      "Durable and sustainable construction"
    ],
    imageUrl: "https://images.unsplash.com/photo-1597394926914-5a3e7e404d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mosaic-glass",
    category: "home-products",
    title: "Luxury & Mosaic Glass",
    description: "Custom furniture and interior design solutions with eco-friendly materials and mosaic glass craftsmanship.",
    longDescription: "Our luxury and mosaic glass products specialize in custom furniture and interior design solutions. The product range includes contemporary and high-end furniture for residential and commercial spaces, bespoke interior solutions tailored to client needs, eco-friendly and sustainable materials used in production, and mosaic glass designs for decorative and functional applications. We offer expertise in luxury mosaic glass craftsmanship for unique, elegant spaces.",
    features: [
      "Contemporary and high-end custom furniture",
      "Bespoke interior design solutions",
      "Eco-friendly and sustainable materials",
      "Mosaic glass designs for decorative applications",
      "Expertise in luxury glass craftsmanship"
    ],
    imageUrl: "https://images.unsplash.com/photo-1503275951622-c670fb7c8d7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  
  // Construction Category
  {
    id: "aluminum-solutions",
    category: "construction",
    title: "High-Quality Aluminum Solutions",
    description: "Leading producer of aluminum doors, windows, and facade systems for residential and commercial buildings.",
    longDescription: "We are a leading producer of aluminum doors, windows, and facade systems offering custom-made solutions for residential and commercial buildings. Our products include aluminum windows and doors with thermal insulation, curtain walls and structural glazing solutions, and sliding and folding door systems for modern architecture. We use high-grade materials and innovative technologies to ensure quality and durability.",
    features: [
      "Aluminum windows and doors with thermal insulation",
      "Curtain walls and structural glazing solutions",
      "Sliding and folding door systems for modern architecture",
      "High-grade materials and innovative technologies",
      "Custom-made solutions for various building types"
    ],
    imageUrl: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "traffic-signs",
    category: "construction",
    title: "Road and Traffic Signs",
    description: "Wide range of road safety and traffic management products compliant with international standards.",
    longDescription: "We offer a wide range of road safety and traffic management products including regulatory signs, warning signs, and directional signage, reflective and illuminated traffic signs for enhanced visibility, road barriers, bollards, and pedestrian safety solutions. Our custom-designed signs comply with international standards and are designed for urban planning, highway safety, and commercial projects.",
    features: [
      "Regulatory signs, warning signs, and directional signage",
      "Reflective and illuminated traffic signs",
      "Road barriers, bollards, and pedestrian safety solutions",
      "Compliance with international standards",
      "Custom designs for various applications"
    ],
    imageUrl: "https://images.unsplash.com/photo-1473621038790-b778b4750efe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "green-houses",
    category: "construction",
    title: "Green Houses",
    description: "Eco-friendly and energy-efficient real estate projects with smart technologies and sustainable designs.",
    longDescription: "We specialize in eco-friendly and energy-efficient real estate projects, offering green building solutions with smart technologies, sustainable residential and commercial developments, high-quality materials and modern architectural designs. Our projects are committed to environmental sustainability and urban innovation, creating spaces that are both beautiful and environmentally responsible.",
    features: [
      "Green building solutions with smart technologies",
      "Sustainable residential and commercial developments",
      "High-quality materials and modern architectural designs",
      "Environmental sustainability focus",
      "Urban innovation and energy efficiency"
    ],
    imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  
  // Cosmetics Category
  {
    id: "premium-cosmetics",
    category: "cosmetics",
    title: "Premium Cosmetic Products",
    description: "High-quality cosmetics with natural ingredients, dermatologically tested and compliant with international standards.",
    longDescription: "Our premium cosmetic products offer a broad range of high-quality items tailored for international markets. We focus on natural ingredients and dermatologically tested formulas that comply with international safety and quality standards. Our products are designed to enhance beauty while maintaining skin health and wellness.",
    features: [
      "Natural ingredients and plant extracts",
      "Dermatologically tested formulas",
      "Compliance with international safety standards",
      "Eco-friendly packaging options",
      "Suitable for various skin types and needs"
    ],
    imageUrl: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getCategories = () => {
  return [
    {
      id: "food-beverage",
      title: "Food & Beverage",
      description: "Discover our premium selection of wines, organic foods, dairy products, confectionery, and beverages.",
      imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "home-products",
      title: "Home Products",
      description: "Explore our range of cleaning products, modern kitchens, luxury stairs, and decorative glass solutions.",
      imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "construction",
      title: "Construction",
      description: "Browse our aluminum solutions, traffic signs, and eco-friendly green house building options.",
      imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cosmetics",
      title: "Cosmetics",
      description: "Discover our premium cosmetic products with natural ingredients and international quality standards.",
      imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];
};