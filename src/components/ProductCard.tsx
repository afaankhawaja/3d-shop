import { Box, HandPlatter, Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
  modelUrl: string;
}

interface Props {
  product: Product;
  setModelUrl: (value: string) => void;
  key: number;
  setOpen: (value: boolean) => void;
  setOpenAR: (value: boolean) => void;
}

const ProductCard = ({
  product,
  setModelUrl,
  key,
  setOpen,
  setOpenAR,
}: Props) => {
  const renderModel = () => {
    setModelUrl(product.modelUrl);
    setOpen(true);
  };

  const renderArView = () => {
    setModelUrl(product.modelUrl);
    setOpenAR(true);
  };
  return (
    <div
      key={key}
      className="group relative bg-[#D6C0B3] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
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

      <div className="lg:absolute inset-x-0 bottom-0 p-4 transition-all duration-300 transform lg:translate-y-full group-hover:translate-y-0">
        <button
          onClick={renderModel}
          className="w-full flex justify-center gap-2 bg-[#493628] text-[#E4E0E1] py-3 rounded-xl font-semibold hover:bg-[#AB886D] hover:shadow-xl transition-colors duration-200"
        >
          <span>View 3D</span> <Box />
        </button>
        <button
          onClick={renderArView}
          className="w-full flex justify-center gap-2 mt-2 bg-[#493628] text-[#E4E0E1] py-3 rounded-xl font-semibold hover:bg-[#AB886D] hover:shadow-xl transition-colors duration-200"
        >
          <span>Open AR</span> <HandPlatter />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
