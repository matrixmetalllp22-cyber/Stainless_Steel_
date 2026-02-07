import { motion } from "framer-motion";

export default function SuperMirror() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
        className="w-full h-56 object-cover"
        alt="Super Mirror Finish"
      />

      <div className="p-6 text-white">
        <h3 className="text-xl font-bold mb-2">#8 Super Mirror</h3>

        <p className="text-gray-300 text-sm mb-4">
          Ultra-reflective stainless steel for luxury interiors and decor.
        </p>

        <button className="px-5 py-2 bg-pink-600 rounded-full hover:bg-pink-700 transition">
          Enquire Now
        </button>
      </div>
    </motion.div>
  );
}
