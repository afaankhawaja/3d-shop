import { Star, ArrowRight, Play, Zap, Sparkles, Box } from "lucide-react";

const features = [
  { icon: Box, title: "Natural Elements", desc: "Sustainably sourced goods" },
  { icon: Zap, title: "Handcrafted", desc: "Artisan-made products" },
  { icon: Sparkles, title: "Premium Quality", desc: "Authentic materials" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#AB886D]/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#D6C0B3]/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#E4E0E1]/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#D6C0B3]/30 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-[#493628]">
                <Sparkles className="w-4 h-4" />
                <span>New Collection Available</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#493628] leading-tight">
                Discover Timeless Designs in
                <span className="block bg-gradient-to-r from-[#AB886D] to-[#493628] bg-clip-text text-transparent">
                  Artisan Craft
                </span>
              </h1>
              <p className="text-lg text-[#493628]/80 max-w-lg">
                Explore our unique collection of handcrafted goods with rich
                textures and natural materials that bring warmth and elegance to
                your space.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-[#AB886D] to-[#493628] text-[#E4E0E1] px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-[#D6C0B3]/25 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Explore Collection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="group bg-[#D6C0B3]/30 backdrop-blur-sm text-[#493628] px-8 py-4 rounded-xl font-semibold hover:bg-[#D6C0B3]/50 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Video</span>
              </button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#AB886D]/30 backdrop-blur-sm rounded-lg mb-3">
                    <feature.icon className="w-6 h-6 text-[#493628]" />
                  </div>
                  <h3 className="font-semibold text-[#493628] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#493628]/70">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-[#AB886D]/30 backdrop-blur-sm rounded-3xl p-8 border border-[#493628]/10">
              <div className="aspect-square bg-gradient-to-br from-[#E4E0E1]/20 to-[#D6C0B3]/20 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-[#AB886D] to-[#493628] rounded-xl transform rotate-12 animate-float"></div>
                </div>
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-[#D6C0B3] to-[#E4E0E1] rounded-lg transform -rotate-12 animate-float animation-delay-1000"></div>
                <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gradient-to-r from-[#493628] to-[#AB886D] rounded-xl transform rotate-45 animate-float animation-delay-2000"></div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#D6C0B3]/30 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center justify-between text-[#493628] text-sm">
                    <span>Authentic Craftsmanship</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-current text-[#493628]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-[#493628]">
                    Handcrafted Wooden Bowl
                  </h3>
                  <span className="text-2xl font-bold text-[#AB886D]">
                    $129
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-[#493628]/70">
                  <span>Sustainable Wood</span>
                  <span>•</span>
                  <span>Natural Finish</span>
                  <span>•</span>
                  <span>Made Locally</span>
                </div>
              </div>
            </div>

            <div className="absolute top-3 right-3 bg-[#D6C0B3]/30 backdrop-blur-sm rounded-xl p-4 border border-[#493628]/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#493628]">1000+</div>
                <div className="text-sm text-[#493628]/70">Unique Items</div>
              </div>
            </div>

            <div className="absolute top-3 left-3 bg-[#D6C0B3]/30 backdrop-blur-sm rounded-xl p-4 border border-[#493628]/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#493628]">50k+</div>
                <div className="text-sm text-[#493628]/70">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
