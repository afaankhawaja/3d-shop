import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, User, Box } from "lucide-react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#" },
  { name: "Collections", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? `${!isMenuOpen ? "bg-[#AB886D]/70 shadow-lg backdrop-blur-md" : "bg-transparent"}   `
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#493628] rounded-lg flex items-center justify-center">
              <Box className="w-5 h-5 text-[#E4E0E1]" />
            </div>
            <span className="text-xl font-bold text-[#493628]">
              Earthy Goods
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#493628] hover:text-[#D6C0B3] transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-[#493628] hover:text-[#D6C0B3] hover:bg-[#D6C0B3]/30 rounded-lg transition-all duration-200">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-[#493628] hover:text-[#D6C0B3] hover:bg-[#D6C0B3]/30 rounded-lg transition-all duration-200 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#D6C0B3] text-[#493628] text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-2 text-[#493628] hover:text-[#D6C0B3] hover:bg-[#D6C0B3]/30 rounded-lg transition-all duration-200">
              <User className="w-5 h-5" />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#493628] p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#AB886D]/70 backdrop-blur-md rounded-lg mt-2 p-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-[#493628] hover:text-[#D6C0B3] transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-[#493628]/20">
              <button className="p-2 text-[#493628] hover:text-[#D6C0B3] hover:bg-[#D6C0B3]/30 rounded-lg transition-all duration-200">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-[#493628] hover:text-[#D6C0B3] hover:bg-[#D6C0B3]/30 rounded-lg transition-all duration-200 relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-[#D6C0B3] text-[#493628] text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2 text-[#493628] hover:text-[#D6C0B3] hover:bg-[#D6C0B3]/30 rounded-lg transition-all duration-200">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
