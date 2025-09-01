import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductListing from "./components/ProductListing";
import Scene from "./components/Scene";

function App() {
  return (
    <div className="min-h-screen bg-[#E4E0E1]">
      <Navbar />
      <Hero />
      <ProductListing />
      <Scene />
    </div>
  );
}

export default App;
