import tshirt from "../assets/images/t-shirt.png";
import jacket from "../assets/images/jacket.png";
import speaker from "../assets/images/speaker.png";
import headphone from "../assets/images/headphone.png";
import jean from "../assets/images/jean.png";
import ledtv from "../assets/images/led-tv.png";
import bookshelf from "../assets/images/bookshelf.png";
import chair from "../assets/images/chair.png";
import table from "../assets/images/table.png";

export const products = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    description:
      "Immerse yourself in pure sound with our top-of-the-line wireless headphones. Featuring active noise cancellation and a 20-hour battery life.",
    category: "Electronics",
    imageUrl: headphone,
    price: 249.99,
    rating: 4.8,
    modelUrl: "/models/headphones/scene.gltf",
  },
  {
    id: 2,
    name: "4K Ultra HD Smart TV",
    description:
      "Experience stunning clarity and vibrant colors with this 55-inch smart TV. Stream your favorite shows and movies in breathtaking 4K resolution.",
    category: "Electronics",
    imageUrl: ledtv,
    price: 699.0,
    rating: 4.5,
    modelUrl: "/models/led-tv/scene.gltf",
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    description:
      "A powerful and compact speaker with deep bass and clear audio. Waterproof and durable, perfect for any adventure.",
    category: "Electronics",
    imageUrl: speaker,
    price: 79.5,
    rating: 4.6,
    modelUrl: "/models/bluetooth-speaker/scene.gltf",
  },
  {
    id: 4,
    name: "Men's Classic Leather Jacket",
    description:
      "Timeless style and superior comfort. Made from 100% genuine leather with a sleek, minimalist design.",
    category: "Clothing",
    imageUrl: jacket,
    price: 189.99,
    rating: 4.9,
    modelUrl: "/models/leather-jacket/scene.gltf",
  },
  {
    id: 5,
    name: "Casual Cotton T-Shirt",
    description:
      "Soft, breathable, and perfect for everyday wear. Available in multiple colors and sizes.",
    category: "Clothing",
    imageUrl: tshirt,
    price: 25.0,
    rating: 4.7,
    modelUrl: "/models/t-shirt/scene.gltf",
  },
  {
    id: 6,
    name: "High-Waisted Skinny Jeans",
    description:
      "A comfortable and flattering fit that holds its shape all day. Made with premium stretch denim.",
    category: "Clothing",
    imageUrl: jean,
    price: 65.0,
    rating: 4.4,
    modelUrl: "/models/jeans/scene.gltf",
  },
  {
    id: 7,
    name: "Mid-Century Modern Armchair",
    description:
      "A stylish and comfortable armchair that adds a touch of sophistication to any living space. Available in a variety of fabric options.",
    category: "Furniture",
    imageUrl: chair,
    price: 399.0,
    rating: 4.8,
    modelUrl: "/models/armchair/scene.gltf",
  },
  {
    id: 8,
    name: "Wooden Coffee Table",
    description:
      "Crafted from solid oak with a clean, rustic design. The perfect centerpiece for your lounge.",
    category: "Furniture",
    imageUrl: table,
    price: 150.0,
    rating: 4.5,
    modelUrl: "/models/coffee-table/scene.gltf",
  },
  {
    id: 9,
    name: "Contemporary Bookshelf",
    description:
      "A sleek, minimalist bookshelf with ample storage. The perfect solution for organizing your books and decor.",
    category: "Furniture",
    imageUrl: bookshelf,
    price: 220.0,
    rating: 4.7,
    modelUrl: "/models/bookshelf/scene.gltf",
  },
];
