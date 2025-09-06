import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ShoppingBag, Box, Smartphone, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Box className="w-12 h-12 text-[#493628]" />,
      title: "Immersive 3D",
      desc: "Explore products in detailed 3D. Rotate, zoom, and see every angle before buying.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-[#493628]" />,
      title: "AR Experience",
      desc: "Place items into your world with AR and visualize how they fit into your life.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-[#493628]" />,
      title: "Customization",
      desc: "Tailor your products with custom colors, sizes, and styles. Truly make it yours.",
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-[#493628]" />,
      title: "Smart Shopping",
      desc: "Seamlessly add items to your cart and enjoy a futuristic shopping experience.",
    },
  ];

  return (
    <div className="bg-[#E4E0E1] min-h-screen flex flex-col items-center px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full mb-16 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl font-extrabold text-[#493628] leading-snug mb-6">
            About <span className="text-[#AB886D]">3D-Shop</span>
          </h1>
          <p className="text-lg md:text-xl text-[#493628] leading-relaxed max-w-xl">
            Welcome to <span className="font-semibold">3D-Shop</span> — where
            innovation meets shopping. Experience{" "}
            <span className="text-[#AB886D] font-medium">3D products</span>,{" "}
            <span className="text-[#AB886D] font-medium">AR visualization</span>{" "}
            and full customization. Shop like never before 🚀
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 h-64 md:h-80 overflow-hidden"
        >
          <Canvas camera={{ position: [5, 5, 5] }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[-0.3, -0.3, -4]} />
            <directionalLight position={[0, 1, 1.61]} />
            <mesh>
              <icosahedronGeometry args={[3, 0]} />
              <meshStandardMaterial
                color="#AB886D"
                metalness={0.6}
                roughness={0.3}
              />
            </mesh>
            <OrbitControls autoRotate enableZoom={false} enablePan={false} />
          </Canvas>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-br from-[#D6C0B3] to-[#AB886D] p-6 rounded-2xl shadow-lg text-center flex flex-col items-center"
          >
            <div className="bg-[#E4E0E1] p-4 rounded-full shadow-md">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-[#493628] mt-4">
              {feature.title}
            </h3>
            <p className="text-[#493628] mt-2 leading-relaxed text-sm">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#493628] mb-6">
          Redefining the Way You Shop Online ✨
        </h2>
        <p className="text-[#493628] max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
          At <span className="font-semibold">3D-Shop</span>, we merge
          cutting-edge technology with convenience, offering a shopping journey
          that’s immersive, personalized, and futuristic.
        </p>
        <button className="bg-[#493628] hover:bg-[#AB886D] transition-all px-8 py-4 rounded-2xl text-white font-semibold shadow-lg text-lg">
          Start Exploring
        </button>
      </motion.div>
    </div>
  );
};

export default About;
