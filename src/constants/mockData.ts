// Sample sneaker product data
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  brand: string;
  rating: number;
  isLimitedEdition: boolean;
  sizes: string[];
  colors?: string[];
  theme: string;
  images: string[];
  isOversized: boolean;
  isTrending: boolean;
  description: string;
  details: string[];
  reviewCount?: number;
  originalPrice?: number;
  colorImages?: { [key: string]: string[] };
}

export const products: Product[] = [
  {
    id: 101,
    name: "Air Max 90",
    price: 1299,
    category: "Running",
    brand: "Nike",
    rating: 4.8,
    isLimitedEdition: true,
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["red"],
    theme: "Running",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9b390895-8786-4437-99bf-af03be5c20a0/ZOOMX+VAPORFLY+NEXT%25+4.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/147a0865-a612-4455-9226-66bb7582fc3d/ZOOMX+VAPORFLY+NEXT%25+4.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/338eb7ae-abd0-4c8a-b6c9-c876036632ea/ZOOMX+VAPORFLY+NEXT%25+4.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bd8046a3-014d-4b08-bd3d-6d335db62df5/ZOOMX+VAPORFLY+NEXT%25+4.png",
    ],
    isOversized: false,
    isTrending: true,
    description: "The Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU accents.",
    details: [
      "Waffle sole",
      "Stitched overlays",
      "TPU accents",
      "Foam midsole",
      "Rubber outsole",
      "Air Max cushioning",
      "Padded collar"
    ],
    reviewCount: 45,
    originalPrice: 1999,
    colorImages: {
      "blue": [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2c110166-1932-4b30-9755-07b69a9ab0cf/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e146ab53-68a7-49af-a798-6c7c1b4909ec/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/56583215-2f99-401c-80ff-8f20dcfc26e9/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a091a10c-6c5b-4a38-9579-c4a72c799718/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c9286def-6421-42cc-ae2c-a9dc906a8c34/WMNS+AIR+MAX+90.png"
      ],
      "black": [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/17e9f8b3-557c-4e5f-9d72-729d378f9557/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2d9b2405-31b7-472a-bdbb-1a3e1dc147c9/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/84c6ddde-e946-4297-aac2-c4b1a2af5a39/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0996a13d-caa0-4671-95da-6e48a7a1caad/WMNS+AIR+MAX+90.png"
      ]
    }
  },
  {
    id: 102,
    name: "Air Max 90",
    price: 1299,
    category: "Running",
    brand: "Nike",
    rating: 4.8,
    isLimitedEdition: true,
    sizes: ["7", "8", "9", "10", "11"],
    theme: "Running",
    colors: ["green"],
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/abc30a6e-ef87-4520-a3a8-a80c1f97f4a6/AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9f54c96-93fd-44c6-b50e-05323769bff6/AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/101ad656-aee5-448f-b51c-3d47e4504f62/AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/40d89f5b-0be2-4639-a7f1-03d9e58bc1a2/AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/486e755e-9515-4090-873c-188ef829bbb5/AIR+ZOOM+PEGASUS+41.png"
    ],
    isOversized: false,
    isTrending: true,
    description: "The Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU accents.",
    details: [
      "Waffle sole",
      "Stitched overlays",
      "TPU accents",
      "Foam midsole",
      "Rubber outsole",
      "Air Max cushioning",
      "Padded collar"
    ],
    reviewCount: 45,
    originalPrice: 1999,
    colorImages: {
      "blue": [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2c110166-1932-4b30-9755-07b69a9ab0cf/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e146ab53-68a7-49af-a798-6c7c1b4909ec/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/56583215-2f99-401c-80ff-8f20dcfc26e9/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a091a10c-6c5b-4a38-9579-c4a72c799718/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c9286def-6421-42cc-ae2c-a9dc906a8c34/WMNS+AIR+MAX+90.png"
      ],
      "black": [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/17e9f8b3-557c-4e5f-9d72-729d378f9557/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2d9b2405-31b7-472a-bdbb-1a3e1dc147c9/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/84c6ddde-e946-4297-aac2-c4b1a2af5a39/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0996a13d-caa0-4671-95da-6e48a7a1caad/WMNS+AIR+MAX+90.png"
      ]
    }
  },
  {
    id: 1,
    name: "Air Max 90",
    price: 1299,
    category: "Running",
    brand: "Nike",
    rating: 4.8,
    isLimitedEdition: true,
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["blue", "black"],
    theme: "Running",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2c110166-1932-4b30-9755-07b69a9ab0cf/WMNS+AIR+MAX+90.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e146ab53-68a7-49af-a798-6c7c1b4909ec/WMNS+AIR+MAX+90.png"
    ],
    isOversized: false,
    isTrending: true,
    description: "The Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU accents.",
    details: [
      "Waffle sole",
      "Stitched overlays",
      "TPU accents",
      "Foam midsole",
      "Rubber outsole",
      "Air Max cushioning",
      "Padded collar"
    ],
    reviewCount: 45,
    originalPrice: 1999,
    colorImages: {
      "blue": [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2c110166-1932-4b30-9755-07b69a9ab0cf/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e146ab53-68a7-49af-a798-6c7c1b4909ec/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/56583215-2f99-401c-80ff-8f20dcfc26e9/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a091a10c-6c5b-4a38-9579-c4a72c799718/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c9286def-6421-42cc-ae2c-a9dc906a8c34/WMNS+AIR+MAX+90.png"
      ],
      "black": [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/17e9f8b3-557c-4e5f-9d72-729d378f9557/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2d9b2405-31b7-472a-bdbb-1a3e1dc147c9/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/84c6ddde-e946-4297-aac2-c4b1a2af5a39/WMNS+AIR+MAX+90.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0996a13d-caa0-4671-95da-6e48a7a1caad/WMNS+AIR+MAX+90.png"
      ]
    }
  },
  {
    id:14,
    name: "Nike G.T. Hustle 3 EP",
    price: 899,
    category: "basketball",
    brand: "Nike",
    rating: 4.6,
    isLimitedEdition: false,
    sizes: ["7", "8", "9", "10"],
    colors: ["pink"],
    theme: "Basketball",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/01bc983f-7522-45b6-802f-477db4b8d87d/G.T.+HUSTLE+3+EP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/14ab8344-3a6c-4117-8f82-c9569aae96e5/G.T.+HUSTLE+3+EP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f77ab886-62fc-41f1-b6bc-4e24c2aabe51/G.T.+HUSTLE+3+EP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7c2bb557-927e-4abc-8372-538c75d574d1/G.T.+HUSTLE+3+EP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bede4f55-9168-4b39-aad0-584f7f951eb2/G.T.+HUSTLE+3+EP.png",


    ],
    isOversized: false,
    isTrending: false,
    description: "The Nike G.T. Hustle 3 EP combines comfort and responsiveness with a Primeknit upper and Boost midsole.",
    details: [
      "Primeknit upper",
      "Boost midsole",
      "Continental rubber outsole",
      "Lace closure"
    ],
    reviewCount: 32,
    originalPrice: 1500,
  },


  {
    id: 3,
    name: "Jordan 1 Retro",
    price: 1499,
    category: "basketball",
    brand: "Nike",
    rating: 4.9,
    isLimitedEdition: true,
    sizes: ["8", "9", "10", "11"],
    theme: "Basketball",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2085e1ea-854f-457d-992d-ac4352a9652d/AIR+JORDAN+1+LOW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bd2cd810-290e-4dfb-8bf8-47cd3a6a37b7/AIR+JORDAN+1+LOW.png",
      "https://www.flightclub.com/media/catalog/product/3/1/312811_01.jpg",
      "https://www.flightclub.com/media/catalog/product/3/1/312811_01.jpg"
    ],
    isOversized: true,
    isTrending: true,
    description: "The Jordan 1 Retro is inspired by the original Air Jordan 1, offering a classic look with premium materials.",
    details: [
      "Leather upper",
      "Air-Sole cushioning",
      "Rubber outsole",
      "Perforated toe"
    ],
    reviewCount: 62,
    originalPrice: 2299,
  },
  {
    id: 4,
    name: "LeBron Witness 7",
    price: 1599,
    category: "basketball",
    brand: "Nike",
    rating: 4.7,
    isLimitedEdition: false,
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["yellow"],
    theme: "Basketball",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c1d102ae-aeaa-4126-8506-48d8251adf32/LEBRON+WITNESS+VIII+EP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/77bb9201-3b7c-42b0-b11f-0335edddc370/LEBRON+WITNESS+VIII+EP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b0203c42-8d9c-4240-a6f1-58b4feda6883/LEBRON+WITNESS+VIII+EP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2647f2e7-da14-415f-93b3-72c4c09f9ebd/LEBRON+WITNESS+VIII+EP.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7fa5880-d391-4ce4-93ae-ad4205a2b3ae/LEBRON+WITNESS+VIII+EP.png"
    ],
    isOversized: true,
    isTrending: false,
    description: "The LeBron Witness 7 is designed for explosive speed and support, inspired by LeBron's game.",
    details: [
      "Breathable mesh upper",
      "Foam midsole",
      "Rubber outsole",
      "LeBron branding",
    ]
  },

  {
    id: 5,
    name: "Nike Shox R4",
    price: 1799,
    category: "basketball",
    brand: "Nike",
    rating: 4.8,
    isLimitedEdition: true,
    sizes: ["8", "9", "10"],
    colors: ["black",],
    theme: "Basketball",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52b0e332-3d1d-4be2-8897-3ef208f34bd6/NIKE+SHOX+R4.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a4ef2c9a-1936-470b-a288-2792a10e077c/NIKE+SHOX+R4.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/68df26fb-93eb-4780-90ea-6353bf01c33d/NIKE+SHOX+R4.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d17b0511-1c61-4250-bab4-e57af1ece50e/NIKE+SHOX+R4.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2941315c-0445-4afa-bcf0-24af3398fa83/NIKE+SHOX+R4.png",
    ],
    isOversized: false,
    isTrending: false,
    description: "The Kyrie Infinity enables players to accelerate and decelerate on demand and capitalize on maximum control.",
    details: [
      "Textile upper",
      "Rubber outsole",
      "Kyrie branding",
      "Lace closure",
    ]
  },

  {
    id: 6,
    name: "Air Force 1",
    price: 999,
    category: "lifestyle",
    brand: "Nike",
    rating: 4.5,
    isLimitedEdition: false,
    sizes: ["7", "8", "9", "10"],
    colors: ["white"],
    theme: "Lifestyle",
    images: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/76f704e4-7607-4b73-ae4c-dbebae643553/NIKE+AIR+FORCE+1+%2707+NN.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0dd6a2a7-083f-45ba-bcf0-40ba6a98c5fa/NIKE+AIR+FORCE+1+%2707+NN.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1f37f0c8-b9c7-4eae-bddf-63131e33a750/NIKE+AIR+FORCE+1+%2707+NN.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/de4e97f5-2ea6-49a3-9fcc-c0d4e041d770/NIKE+AIR+FORCE+1+%2707+NN.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1e0ff09a-69c5-4874-b602-823bfbec8e12/NIKE+AIR+FORCE+1+%2707+NN.png"
    ],
    isOversized: false,
    isTrending: false,
    description: "The Air Force 1 is a hoops original that delivers everyday style and comfort in a low-cut silhouette.",
    details: [
      "Leather upper",
      "Air cushioning",
      "Rubber outsole",
      "Perforations",
    ]
  },

  {
    id: 8,
    name: "Puma RS-X",
    price: 1299,
    category: "lifestyle",
    brand: "Puma",
    rating: 4.7,
    isLimitedEdition: false,
    sizes: ["7", "8", "9", "10"],
    colors: ["black"],
    theme: "Lifestyle",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402203/03/sv01/fnd/IND/fmt/png/RS-X-Geek-Advanced-Cushioning-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402203/03/sv04/fnd/IND/fmt/png/RS-X-Geek-Advanced-Cushioning-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402203/03/sv02/fnd/IND/fmt/png/RS-X-Geek-Advanced-Cushioning-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402203/03/bv/fnd/IND/fmt/png/RS-X-Geek-Advanced-Cushioning-Sneakers"
    ],
    isOversized: false,
    isTrending: false,
    description: "The Puma RS-X is engineered with Running System technology for superior cushioning and bold style.",
    details: [
      "Mesh and leather upper",
      "RS cushioning",
      "Rubber outsole",
      "Puma branding",
    ]
  },

  {
    id: 9,
    name: "Converse Chuck 70",
    price: 899,
    category: "lifestyle",
    brand: "Converse",
    rating: 4.3,
    isLimitedEdition: false,
    sizes: ["6", "7", "8", "9"],
    colors: ["green"],
    theme: "Lifestyle",
    images: [
      "https://www.converse.in/media/catalog/product/a/1/a13359c_c_08x1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=512&width=410&auto=webp&format=pjpg",
      "https://www.converse.in/media/catalog/product/a/1/a13359c_g_08x1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=512&width=410&auto=webp&format=pjpg",
      "https://www.converse.in/media/catalog/product/a/1/a13359c_a_107x1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=900&width=900&auto=webp&format=pjpg",
    ],
    isOversized: false,
    isTrending: false,
    description: "The Converse Chuck 70 combines the best details from the '70s-era Chuck with impeccable craftsmanship and premium materials.",
    details: [
      "Canvas upper",
      "OrthoLite insole",
      "Rubber outsole",
      "Vintage details",
    ]
  },
  {
    id: 10,
    name: "Cons AS-1 Pro Suede & Canvas",
    price: 299,
    category: "lifestyle",
    brand: "Converse",
    rating: 4.3,
    isLimitedEdition: false,
    sizes: ["6", "7", "8", "9"],
    colors: [ "blue"],
    theme: "Lifestyle",
    images: [
      "https://www.converse.in/media/catalog/product/a/1/a10459c_c_08x1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=512&width=410&auto=webp&format=pjpg",
      "https://www.converse.in/media/catalog/product/a/1/a10459c_g_08x1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=512&width=410&auto=webp&format=pjpg",
      "https://www.converse.in/media/catalog/product/a/1/a10459c_d_08x1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=512&width=410&auto=webp&format=pjpg",
      "https://www.converse.in/media/catalog/product/a/1/a10459c_q_08x1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=512&width=410&auto=webp&format=pjpg",
      "https://www.converse.in/media/catalog/product/a/1/a10459c_h_08x1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=512&width=410&auto=webp&format=pjpg"

    ],
    isOversized: false,
    isTrending: false,
    description: "The Converse Chuck 70 combines the best details from the '70s-era Chuck with impeccable craftsmanship and premium materials.",
    details: [
      "Canvas upper",
      "OrthoLite insole",
      "Rubber outsole",
      "Vintage details",
    ]
  },

  {
    id: 11,
    name: "Reebok Classic",
    price: 999,
    category: "lifestyle",
    brand: "Reebok",
    rating: 4.4,
    isLimitedEdition: false,
    sizes: ["6", "7", "8", "9", "10"],
    colors: ["white"],
    theme: "Lifestyle",
    images: [
      "https://cdn.shopify.com/s/files/1/0862/7834/0912/files/100210141_SLC_eCom-tif.png?v=1736435076&width=800",
      "https://cdn.shopify.com/s/files/1/0862/7834/0912/files/100210141_TPP_eCom-tif.png?v=1736435077&width=800",
      "https://cdn.shopify.com/s/files/1/0862/7834/0912/files/100210141_FLT_eCom-tif.png?v=1736435077&width=800",
      "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4/Reebok_Classic_Leather_Shoes_White_49797_01_standard.jpg"
    ],
    isOversized: false,
    isTrending: false,
    description: "The Reebok Classic is a timeless icon, offering a clean and minimalist design.",
    details: [
      "Leather upper",
      "EVA midsole",
      "Rubber outsole",
      "Reebok branding",
    ]
  },

];

export const categories = {
  "running": "Running",
  "basketball": "Basketball",
  "lifestyle": "Lifestyle",
  "skateboarding": "Skateboarding"
};

export const availableSizes = ["6", "7", "8", "9", "10", "11", "12"];

export const priceRanges = [
  { id: '100-150', label: '$100 - $150', min: 100, max: 150 },
  { id: '100-999', label: '$150 - $999', min: 150, max: 999 },
  { id: '1000-2000', label: '$1000 - $2000', min: 1000, max: 2000 },
];
