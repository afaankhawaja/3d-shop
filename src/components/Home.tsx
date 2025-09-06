import Navbar from "./Navbar";
import Hero from "./Hero";
import ProductListing from "./ProductListing";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#E4E0E1]">
      <Navbar />
      <Hero />
      <ProductListing />
    </div>
  );
};

export default Home;
