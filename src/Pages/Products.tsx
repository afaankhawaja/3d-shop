import { useState } from "react";
import { products } from "../constants/products";
import ProductCard from "../components/ProductCard";
import CustomModal from "../components/CustomModel";
import Scene from "../components/Scene";
import ModelViewer from "../components/ModelViewer";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [openAR, setOpenAR] = useState(false);
  const [modelUrl, setModelUrl] = useState("");

  const handleModalClose = () => {
    setOpen(false);
    setModelUrl("");
  };

  const handleARModalClose = () => {
    setOpenAR(false);
    setModelUrl("");
  };
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
    <>
      <section className="bg-[#E4E0E1] py-20 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#493628] tracking-tight">
              Our Latest Products
            </h2>
            <p className="mt-4 text-lg text-[#AB886D] max-w-2xl mx-auto">
              Experience the future of online shopping with{" "}
              <span className="font-semibold text-[#493628]">3D views</span>,{" "}
              <span className="font-semibold text-[#493628]">AR previews</span>,
              and customizable products designed to fit your style.
            </p>
            <div className="mt-6 inline-block bg-[#D6C0B3] text-[#493628] px-5 py-2 rounded-full shadow-md text-sm font-medium">
              ✨ Explore craftsmanship, uniqueness & innovation ✨
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-xl border border-[#D6C0B3] focus:outline-none focus:ring-2 focus:ring-[#AB886D] text-[#493628] placeholder-[#AB886D]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedCategory === category
                      ? "bg-[#493628] text-[#E4E0E1] shadow-md"
                      : "bg-[#D6C0B3] text-[#493628] hover:bg-[#AB886D] hover:text-[#E4E0E1]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  setOpen={setOpen}
                  setOpenAR={setOpenAR}
                  setModelUrl={setModelUrl}
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-[#AB886D] mt-10 text-lg">
              No products found matching your search.
            </p>
          )}

          <div className="mt-12 flex justify-center">
            <button className="px-6 py-3 rounded-xl bg-[#493628] text-[#E4E0E1] font-semibold shadow-lg hover:bg-[#AB886D] hover:text-[#493628] transition">
              View All Products
            </button>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-40 h-40 bg-[#D6C0B3] opacity-30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#AB886D] opacity-20 rounded-full blur-3xl -z-10"></div>
      </section>
      <CustomModal
        isOpen={open}
        onClose={() => handleModalClose()}
        title="3D Model Viewer"
        width="1200px"
        height="700px"
      >
        {modelUrl && <Scene modelUrl={modelUrl} />}
      </CustomModal>

      <CustomModal
        isOpen={openAR}
        onClose={() => handleARModalClose()}
        title="AR Model Viewer"
        width="1200px"
        height="700px"
      >
        {modelUrl && <ModelViewer modelUrl={modelUrl} />}
      </CustomModal>
    </>
  );
};

export default Products;
