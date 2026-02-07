import { motion } from "framer-motion";

export default function Hairline() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1611591437281-460bfbe1220b"
        className="w-full h-56 object-cover"
        alt="Hairline Finish"
      />

      <div className="p-6 text-white">
        <h3 className="text-xl font-bold mb-2">Hairline Surface</h3>

        <p className="text-gray-300 text-sm mb-4">
          Elegant long-grain textured finish available in multiple colors.
        </p>

        <button className="px-5 py-2 bg-emerald-600 rounded-full hover:bg-emerald-700 transition">
          Enquire Now
        </button>
      </div>
    </motion.div>
  );
}
