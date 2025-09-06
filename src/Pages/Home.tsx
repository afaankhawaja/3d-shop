import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductListing from "../components/ProductListing";

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
