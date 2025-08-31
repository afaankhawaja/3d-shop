import { Star } from "lucide-react";

interface Products {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
}

const ProductCard = ({ product }: { product: Products }) => {
  return (
    <div className="group relative bg-[#D6C0B3] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-[#493628] leading-tight pr-2">
            {product.name}
          </h3>
          <span className="text-xl font-bold text-[#AB886D]">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center space-x-1">
          <Star />
          <span className="text-sm text-[#493628]/70">
            ({product.rating.toFixed(1)})
          </span>
        </div>

        <p className="text-sm text-[#493628]/80 line-clamp-2">
          {product.description}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
        <button className="w-full bg-[#493628] text-[#E4E0E1] py-3 rounded-xl font-semibold hover:bg-[#AB886D] hover:shadow-xl transition-colors duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
