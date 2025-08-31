import ProductCard from "./ProductCard";
import { products } from ".././constants/products";

const ProductListing = () => {
  return (
    <section className="bg-[#E4E0E1] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#493628]">
            Our Latest Products
          </h2>
          <p className="mt-4 text-lg text-[#AB886D]">
            Discover quality craftsmanship and unique items for every category.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
